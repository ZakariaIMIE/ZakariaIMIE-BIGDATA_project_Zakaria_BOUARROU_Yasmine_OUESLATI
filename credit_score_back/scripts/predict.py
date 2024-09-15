import sys
import pickle
import json

# Charger le modèle pickle
with open('models/model.pkl', 'rb') as file:
    model = pickle.load(file)

# Récupérer les données d'entrée depuis Node.js
input_data = json.loads(sys.argv[1])

# Faire une prédiction
prediction = model.predict([input_data])

# Résultat "solvable" ou "non solvable"
result = "solvable" if prediction[0] == 1 else "non solvable"

# Retourner le résultat sous forme de JSON
print(json.dumps({'result': result}))
