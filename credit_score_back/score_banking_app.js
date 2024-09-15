const express = require('express');
const cors = require('cors'); // Importez le module cors
const path = require('path'); // Importez le module path
const televerse_api = require('./routes/televerse');
const stats_api = require('./routes/stats');
const formulaire_api = require('./routes/formulaire');
const recherche_formulaire_api = require('./routes/recherche_formulaire');
const contrats_api = require('./routes/contrats');
const users_api = require('./routes/users');
const users_delete_api = require('./routes/users_delete');
const users_update_api = require('./routes/users_update');
const users_create_api = require('./routes/users_create');
const users_login_api = require('./routes/users_login');
<<<<<<< HEAD
=======
const model_prediction = require('./routes/model_prediction');
>>>>>>> e51b4fc (last push 15-09-2024 delivery)
const authenticateToken_middleware_function = require('./models/authenticateToken_middleware');

//parser to explore.



// Initialisation de l'application Express
const app = express();
const port = 3001;

// Utilisation du middleware pour toutes les routes nécessitant une authentification
// or seconde methode to make it only on the endpoint you want to...
//app.use(authenticateToken_middleware_function);

// Utilisation du middleware CORS
app.use(cors());

// Module express lit le module json
app.use(express.json());

// Ouvre le fichier public pour le lire
app.use(express.static(path.join(__dirname, 'public')));


// NOS APIs : ////////////////////////////////////////////////////////////////////////////////

/********** */
// API Login :
app.use('/users_login', users_login_api); // do not need middleware

<<<<<<< HEAD
=======
//API du model qui prédit :
app.use('/model_prediction', authenticateToken_middleware_function, model_prediction_api);

>>>>>>> e51b4fc (last push 15-09-2024 delivery)
// Utilisation de la route des stats
app.use('/stats',  authenticateToken_middleware_function,   stats_api);

// Utilisation de la route des televerse
app.use('/televerse',  authenticateToken_middleware_function,   televerse_api);

// Utilisation de la route des formulaire
app.use('/formulaire',  authenticateToken_middleware_function,   formulaire_api);

// Utilisation de la route des recherche_formulaire
app.use('/recherche_formulaire',  authenticateToken_middleware_function,   recherche_formulaire_api);

// Utilisation de la route des contrats
app.use('/contrats',  authenticateToken_middleware_function,   contrats_api);

// API affichage des utilisateurs
app.use('/users',  authenticateToken_middleware_function,  users_api);

// API modification des utilisateurs
app.use('/users_update',  authenticateToken_middleware_function,  users_update_api);

// API supression des utilisateurs
app.use('/users_delete',  authenticateToken_middleware_function,  users_delete_api);

// API création des utilisateurs
app.use('/users_create',  authenticateToken_middleware_function,  users_create_api);




// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
