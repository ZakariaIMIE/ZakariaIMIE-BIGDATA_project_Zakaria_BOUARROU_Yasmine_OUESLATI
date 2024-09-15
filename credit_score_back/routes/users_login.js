const express = require('express');
const bcrypt = require('bcrypt'); // Importer bcrypt pour la comparaison des mots de passe
const users_login = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');


/********** pense a la defactoriser dissocié :  */
 
const jwt = require('jsonwebtoken');
const expressSecret = 'Strasbourg123!@@@'; 

/********  ****/

users_login.post('/', async (req, res) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).send('Nom d\'utilisateur et mot de passe sont requis');
  }

  try {
    await connectToDatabase();
    console.log('Connected to database');

    const request = new mssql.Request();
    request.input('Email', mssql.NVarChar, Email);

    const result = await request.query(`
      SELECT Email, Password FROM wbUsers WHERE Email = @Email
    `);

    if (result.recordset.length === 0) {
      console.log('User not found');
      return res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    }

    const user = result.recordset[0];
    console.log('User found:', user);

    const passwordMatch = await bcrypt.compare(Password, user.Password);
    console.log('Password match:', passwordMatch);

    if (passwordMatch) {
      const token = jwt.sign({ Email: user.Email }, expressSecret, { expiresIn: '1h' });
      res.status(200).send({ message: 'Connexion réussie', token: token });  
    } else {
      return res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
    }

  } catch (err) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', err);
    res.status(500).send('Erreur lors de la connexion de l\'utilisateur');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = users_login;