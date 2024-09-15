import React from "react";

function Statistiques() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Statistiques du Crédit Scoring</h1>

      <div style={styles.statsContainer}>
        <div style={styles.statBox}>
          <h2 style={styles.statTitle}>Nombre total de clients</h2>
          <p style={styles.statNumber}>12,345</p>
        </div>

        <div style={styles.statBox}>
          <h2 style={styles.statTitle}>Crédits approuvés</h2>
          <p style={styles.statNumber}>7,890</p>
        </div>

        <div style={styles.statBox}>
          <h2 style={styles.statTitle}>Crédits refusés</h2>
          <p style={styles.statNumber}>4,455</p>
        </div>

        <div style={styles.statBox}>
          <h2 style={styles.statTitle}>Taux d'approbation</h2>
          <p style={styles.statNumber}>64%</p>
        </div>
      </div>

      <div style={styles.progressContainer}>
        <h2 style={styles.progressTitle}>Progression des crédits par mois</h2>
        <div style={styles.progressBarWrapper}>
          <div style={{ ...styles.progressBar, width: "70%" }}>Janvier - 70%</div>
        </div>
        <div style={styles.progressBarWrapper}>
          <div style={{ ...styles.progressBar, width: "80%" }}>Février - 80%</div>
        </div>
        <div style={styles.progressBarWrapper}>
          <div style={{ ...styles.progressBar, width: "90%" }}>Mars - 90%</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "rgba(0, 0, 255, 0.3)",
    color: "white",
    textAlign: "center",
    borderRadius: "8px",
    backdropFilter: "blur(10px)"
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "40px",
  },
  statBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "150px",
    backdropFilter: "blur(5px)",
  },
  statTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  statNumber: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  progressContainer: {
    marginTop: "40px",
  },
  progressTitle: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  progressBarWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  progressBar: {
    backgroundColor: "rgba(0, 128, 255, 0.7)",
    color: "white",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "left",
  },
};

export default Statistiques;
