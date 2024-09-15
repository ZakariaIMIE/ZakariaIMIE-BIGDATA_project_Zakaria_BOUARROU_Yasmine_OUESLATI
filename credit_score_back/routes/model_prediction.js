const express = require('express');
const { exec } = require('child_process'); // Importer exec pour exécuter le script Python
const model_prediction = express.Router();

model_prediction.post('/api/predict', (req, res) => {
  const input = req.body.input; // Données d'entrée venant du frontend (tableau de 10 valeurs)

  // Appel du script Python avec les données d'entrée
  exec(`python3 models/predict.py '${JSON.stringify(input)}'`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur: ${stderr}`);
      return res.status(500).send('Erreur dans le modèle IA');
    }

    try {
      const result = JSON.parse(stdout); // Résultat retourné par le script Python
      res.json(result); // Envoyer la prédiction "solvable" ou "non solvable" au frontend
    } catch (parseError) {
      console.error(`Erreur de parsing: ${parseError.message}`);
      res.status(500).send('Erreur dans le traitement des données');
    }
  });
});

module.exports = model_prediction;
