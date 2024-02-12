import './Experience.css';

const ExperienceTotal: React.FC = () => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">Stagiaire, Adaptation d'un programme Python</h1>
        <h2 id="lieu">TotalEnergies, Pau, France</h2>
        <h3 id="date">Juillet 2023 - Septembre 2023</h3>
        <ul id="description">
          <li>Correction d'erreurs dans un programme python de prédiction</li>
          <li>Réparation du dépôt git du projet</li>
          <li>Adaptation du prgramme au outils préférés par TotalEnergies</li>
          <li>Début d'interprétation</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>Data Assimilation</li>
          <li>Git</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperienceTotal;

