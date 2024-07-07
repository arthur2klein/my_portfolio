import './Competences.css';

const CompetencesCommunication: React.FC = () => {
  return (
    <div className="container">
      <h1> Communication </h1>
      
      <div className="line">
        <div className="domain">
          <h2>Langues</h2>
          <ul>
            <li>Allemand</li>
            <li>Anglais</li>
            <li>Français</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Réunions</h2>
          <ul>
            <li>Animation de réunion</li>
            <li>Compte rendus de réunion</li>
            <li>Conduite d'entretien</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetencesCommunication;

