const express = require('express');
const bcrypt = require('bcrypt'); // Importer bcrypt
const users_create = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');

// Endpoint pour créer un nouvel utilisateur
users_create.post('/', async (req, res) => {
  const { firstname, lastname, company_name, Password, Email, role, Location, EntryDate, ExitDate } = req.body;

  // Vérification des champs obligatoires
  if (!firstname || !lastname || !company_name || !Password || !Email || !role || !Location || !EntryDate || !ExitDate) {
    return res.status(400).send('Tous les champs sont obligatoires');
  }

  try {
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(Password, 10); // Ajouter le hachage

    await connectToDatabase();

    const request = new mssql.Request();
    request.input('firstname', mssql.NVarChar, firstname);
    request.input('lastname', mssql.NVarChar, lastname);
    request.input('company_name', mssql.NVarChar, company_name);
    request.input('Password', mssql.NVarChar, hashedPassword); // Utiliser le mot de passe haché
    request.input('Email', mssql.VarChar, Email);
    request.input('role', mssql.NVarChar, role);
    request.input('Location', mssql.NVarChar, Location);
    request.input('EntryDate', mssql.Date, EntryDate);
    request.input('ExitDate', mssql.Date, ExitDate);

    // Appel de la procédure stockée pour ajouter un utilisateur
    await request.execute('AddUser');

    res.status(201).send('Utilisateur créé avec succès');
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur:', err);
    res.status(500).send('Erreur lors de la création de l\'utilisateur');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = users_create;
