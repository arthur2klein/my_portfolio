import './Experience.css';

const ExperienceKarnten: React.FC = () => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">Stagiaire, développement mobile</h1>
        <h2 id="lieu">CISMAT (Carinthia Institute of Smart Materials), Fachhochschule Kärnten, Villach, Autriche</h2>
        <h3 id="date">Juin 2022 - Août 2022</h3>
        <ul id="description">
          <li>Développement d'une application Android pour la visualisation et l'exportation de données</li>
          <li>Développement du programme Java fournissant les données d'un capteur à cette application via Sockets</li>
        </ul>
        <ul id="competences">
          <li>Framework Kotlin pour Android</li>
          <li>Allemand</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperienceKarnten;

