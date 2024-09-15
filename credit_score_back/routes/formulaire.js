const express = require('express');
const contrats = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');

// Endpoint pour obtenir des données d'opportunités de la base de données
contrats.get('/', async (req, res) => {
  try {
    await connectToDatabase();

    const request = new mssql.Request();

    const result = await request.query(
      "SELECT TOP (200) [AgreementNo],[Purpose],[CostToBeFinanced],[Contract_origination_status] FROM [amWebUK].[dbo].[wbContract];"
    ); // change here : Accounting_Status became : Contract_origination_status

    res.json(result.recordset);
  } catch (err) {
    console.error('Erreur de base de données:', err);
    res.status(500).send('Erreur du serveur');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = contrats;