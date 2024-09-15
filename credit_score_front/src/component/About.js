import '../App.css';

function About() {
    return (
        <div className="page-1">
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
        <h1 style={{ margin: 0 }}>À propos de nous</h1>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            color: '#fff',
            borderBottom: '2px solid #fff',
            paddingBottom: '5px',
            marginBottom: '10px',
          }}>Notre Mission</h2>
          <p style={{ lineHeight: '1.6' }}>Chez Home Credit, notre mission est de fournir des solutions de crédit accessibles, même pour ceux qui ont peu ou pas d'historique de prêt. Nous nous engageons à aider nos clients à atteindre leurs objectifs financiers avec des conditions favorables et un service exceptionnel.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            color: '#fff',
            borderBottom: '2px solid #fff',
            paddingBottom: '5px',
            marginBottom: '10px',
          }}>Notre Histoire</h2>
          <p style={{ lineHeight: '1.6' }}>Fondée en 2000, Home Credit a évolué pour devenir un leader dans le domaine des crédits à la consommation. Nous utilisons des technologies financières innovantes pour répondre aux besoins changeants du marché.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{
            color: '#fff',
            borderBottom: '2px solid #fff',
            paddingBottom: '5px',
            marginBottom: '10px',
          }}>Notre Équipe</h2>
          <p style={{ lineHeight: '1.6' }}>Notre équipe est composée de professionnels expérimentés et passionnés par le secteur financier. Nous travaillons ensemble pour offrir le meilleur service à nos clients et continuer à innover dans nos offres de crédit.</p>
        </section>
      </main>
    </div>
        </div>
      
    );
  }
  
  export default About;