import './Competences.css';

const CompetencesMéthodes: React.FC = () => {
  return (
    <div className="container">

      <h1> Méthodes </h1>
      
      <div className="line">

        <div className="domain">
          <h2>Pratiques</h2>
          <ul>
            <li>Design patterns</li>
            <li>Diagrammes UML</li>
            <li>Scrum</li>
            <li>TDD</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Programmation parallèle</h2>
          <ul>
            <li>OpenMP</li>
            <li>MPI</li>
            <li>IPC Unix</li>
            <li>Kafka</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesMéthodes;

