
import '../App.css';

function Contcat() {
    return (
        <div className="page-3">
            <div style={{
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      backgroundColor: 'rgba(0, 51, 102, 0.3)',  // Bleu marine plus transparent
      backdropFilter: 'blur(5px)',  // Effet flou plus prononcé
      padding: '20px',
      minHeight: '100vh',
      backgroundImage: 'url("/path/to/your/image.jpg")',  // Remplacez par le chemin de votre image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <header style={{
        backgroundColor: 'rgba(0, 51, 102, 0.5)',  // Bleu marine plus opaque pour le header
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <h1 style={{ margin: 0 }}>Nous Contacter</h1>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '20px' }}>Pour toute question ou demande d'information, veuillez nous contacter via les moyens suivants :</p>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            color: '#fff',
            borderBottom: '2px solid #fff',
            paddingBottom: '5px',
            marginBottom: '10px',
          }}>Informations de Contact</h2>
          <p style={{ lineHeight: '1.6' }}><strong>Adresse :</strong> 123 Rue de l'Innovation, 75000 Paris, France</p>
          <p style={{ lineHeight: '1.6' }}><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p style={{ lineHeight: '1.6' }}><strong>Email :</strong> contact@homecredit.fr</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            color: '#fff',
            borderBottom: '2px solid #fff',
            paddingBottom: '5px',
            marginBottom: '10px',
          }}>Formulaire de Contact</h2>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <label htmlFor="name" style={{ marginBottom: '5px', color: '#fff' }}>Nom :</label>
            <input type="text" id="name" name="name" style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }} required />

            <label htmlFor="email" style={{ marginBottom: '5px', color: '#fff' }}>Email :</label>
            <input type="email" id="email" name="email" style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }} required />

            <label htmlFor="message" style={{ marginBottom: '5px', color: '#fff' }}>Message :</label>
            <textarea id="message" name="message" style={{
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }} rows="5" required></textarea>

            <button type="submit" style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#003366',
              color: '#fff',
              cursor: 'pointer',
            }}>Envoyer</button>
          </form>
        </section>
      </main>
    </div>
        </div>
      
    );
  }
  
  export default Contcat;