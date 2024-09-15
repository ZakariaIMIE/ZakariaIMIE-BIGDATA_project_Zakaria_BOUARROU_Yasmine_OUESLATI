const express = require('express');
const odbc = require('odbc');

// Informations de connexion
const host = '212.132.108.109';
const port = '1433';
const login = 'sa';
const pwd = 'Strasbourg123!';
const schema = 'amWebUK';


// Chaîne de connexion ODBC
const connectionString = `DRIVER={ODBC Driver 17 for SQL Server};SERVER=${host},${port};DATABASE=${schema};UID=${login};PWD=${pwd};Encrypt=no;TrustServerCertificate=yes`;



// Initialisation de l'application Express
const app = express();
const porttt = 4000;

// Route API pour obtenir des données
app.get('/api', async (req, res) => {
  try {
    // Connexion à la base de données
    const connection = await odbc.connect(connectionString);
    const result = await connection.query(' SELECT R1.LineDesc, A2.Ref, A2.AgreementNo, F3.Name as Employee_name, O4.Name as Opportunity_name, O4.Customer__c, P5.Name as Company_name, O4.Customer_IdSF, O4.Customer_Name FROM amReqLine R1, amContract A2, amEmplDept F3, amSFOpportunity O4, amCompany P5 WHERE R1.lAcquCntrId=A2.lCntrId AND A2.lFunderId=F3.lEmplDeptId AND A2.lOpportunityId=O4.OpportunityId AND A2.lPrimaryPartnerId=P5.lCpyId ');
    console.log("connected");
    // Fermeture de la connexion
    await connection.close();

    // Envoi des données en réponse
    res.json(result);

  } catch (err) {
    console.error('ODBC error', err);
    res.status(500).send('Erreur du serveur');
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${porttt}`);
});