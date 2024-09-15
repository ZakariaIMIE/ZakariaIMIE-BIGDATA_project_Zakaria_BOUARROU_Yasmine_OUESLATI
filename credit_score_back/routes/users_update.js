const express = require('express');
const bcrypt = require('bcrypt'); // Importer bcrypt pour le hachage des mots de passe
const users_update = express.Router();
const { mssql, connectToDatabase } = require('../models/db_connexion');

users_update.post('/:id', async (req, res) => {
  const userId = req.params.id;

  // Vérifier si l'ID de l'utilisateur est valide
  if (!userId) {
    return res.status(400).send('ID de l\'utilisateur manquant');
  }

  // Récupérer les champs envoyés dans la requête
  const { firstname, lastname, company_name, Password, Email, role, Location, EntryDate, ExitDate } = req.body;

  // Initialiser un objet pour stocker les champs à mettre à jour
  const fieldsToUpdate = {};

  // Ajouter les champs à mettre à jour s'ils sont présents dans la requête
  if (firstname) fieldsToUpdate.firstname = firstname;
  if (lastname) fieldsToUpdate.lastname = lastname;
  if (company_name) fieldsToUpdate.company_name = company_name;
  if (Password) fieldsToUpdate.Password = Password;
  if (Email) fieldsToUpdate.Email = Email;
  if (role) fieldsToUpdate.role = role;
  if (Location) fieldsToUpdate.Location = Location;
  if (EntryDate) fieldsToUpdate.EntryDate = EntryDate;
  if (ExitDate) fieldsToUpdate.ExitDate = ExitDate;
  

  try {
    await connectToDatabase();

    const request = new mssql.Request();

    // Vérifier si le mot de passe doit être mis à jour et le hacher
    if (fieldsToUpdate.Password) {
      fieldsToUpdate.Password = await bcrypt.hash(fieldsToUpdate.Password, 10);
    }

    // Générer dynamiquement les paramètres d'entrée pour les champs à mettre à jour
    Object.keys(fieldsToUpdate).forEach(field => {
      // Utiliser les types de données corrects en fonction des informations fournies
      let sqlType = mssql.NVarChar; // Par défaut
      if (field === 'Email') {
        sqlType = mssql.NVarChar;
      } else if (field === 'EntryDate' || field === 'ExitDate') {
        sqlType = mssql.Date;
      }
      request.input(field, sqlType, fieldsToUpdate[field]);
    });

    // Ajouter l'ID de l'utilisateur comme paramètre d'entrée
    request.input('UserId', mssql.NVarChar, userId);

    // Construire la requête SQL dynamiquement en fonction des champs à mettre à jour
    const updateQuery = `
      UPDATE wbUsers 
      SET ${Object.keys(fieldsToUpdate).map(field => `${field} = @${field}`).join(', ')}
      WHERE UserId = @UserId
    `;

    const result = await request.query(updateQuery);
    console.log('Utilisateur mis à jour avec succès');

    res.status(200).send('Utilisateur mis à jour avec succès');
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', err);
    res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
  } finally {
    mssql.close().catch(err => console.error('Erreur lors de la fermeture de la connexion:', err));
  }
});

module.exports = users_update;
