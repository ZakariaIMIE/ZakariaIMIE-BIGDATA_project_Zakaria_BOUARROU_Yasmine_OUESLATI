const express = require('express');
const users = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');

// Endpoint pour afficher tous les utilisateurs
users.get('/', async (req, res) => {
  try {
    await connectToDatabase();
    const result = await new mssql.Request().query(
      'select UserID, firstname, lastname, company_name, Email, Location, EntryDate, ExitDate, role from wbUsers;'
      );
    res.json(result.recordset);
  } catch (err) {
    console.error('Erreur lors de l\'affichage des utilisateurs:', err);
    res.status(500).send('Erreur lors de l\'affichage des utilisateurs');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = users;
