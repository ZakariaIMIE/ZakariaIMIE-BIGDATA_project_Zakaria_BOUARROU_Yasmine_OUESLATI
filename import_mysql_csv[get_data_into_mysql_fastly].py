
import pandas as pd
from sqlalchemy import create_engine
# import d6tstack.utils
import time

# Chemin vers votre fichier CSV
<<<<<<< HEAD
csv_file_path = 'E:/system32_1/Studies/Master MS2D M1 M2/IMIE_PARIS/M2/Big DATA/AA_Final_Synthèse_Project/Data_CSV/HomeCredit_columns_description.csv'
=======
csv_file_path = 'E:/system32_1/Studies/Master MS2D M1 M2/IMIE_PARIS/M2/Big DATA/AA_Final_Synthèse_Project/Data_CSV/cleandata.csv'
>>>>>>> e51b4fc (last push 15-09-2024 delivery)
# Lire le fichier CSV avec pandas
df = pd.read_csv(csv_file_path)


start_time = time.time()

engine = create_engine("mysql+mysqlconnector://root:@127.0.0.1:3306/projet_data", echo=False)

# Ouvrir la connexion à la base de données
connection = engine.connect()

try:
<<<<<<< HEAD
    df.to_sql(name='HomeCredit_columns_description', con=connection, if_exists='replace', chunksize=1000, index=False, method='multi')
=======
    df.to_sql(name='cleandata', con=connection, if_exists='replace', chunksize=1000, index=False, method='multi')
>>>>>>> e51b4fc (last push 15-09-2024 delivery)
except Exception as e:
    print("Erreur lors de l'enregistrement des données :", e)
finally:
    # Fermer la connexion à la base de données
    connection.close()

# for knowinf time it took
end_time = time.time()

total_time = end_time - start_time
print(f"Temps d'exécution du script: {total_time} secondes")