const mysql = require('mysql2');


// Informations de connexion à la base de données
const config = {
  user: 'BDD_bank_score',
  password: 'banking',
  server: '220.120.150.100',
  port: 1420,
  database: 'banking_score',
  options: {
    encrypt: false, // Si votre serveur MSSQL nécessite SSL, mettez à true
    trustServerCertificate: true // Si votre serveur MSSQL utilise un certificat auto-signé, mettez à true
  }
};

// Créer une connexion à la base de données
const connection = mysql.createConnection(config);

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    connection.connect(err => {
      if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        reject(err);
      } else {
        console.log('Connexion à la base de données établie.');
        resolve();
      }
    });
  });
}

module.exports = { connection, connectToDatabase };
