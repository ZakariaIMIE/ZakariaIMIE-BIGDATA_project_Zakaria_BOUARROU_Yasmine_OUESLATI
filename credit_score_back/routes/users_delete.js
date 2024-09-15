const express = require('express');
const users_delete = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');

// Endpoint pour supprimer un utilisateur avec une requête POST
users_delete.post('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await connectToDatabase();
    const request = new mssql.Request();
    request.input('UserId', mssql.NVarChar, userId); // Utilisez NVarChar pour VARCHAR dans SQL Server

    await request.query('DELETE FROM wbUsers WHERE UserId = @UserId');

    res.status(200).send('Utilisateur supprimé avec succès');
  } catch (err) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', err);
    res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = users_delete;
