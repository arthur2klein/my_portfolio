import './Competences.css';

const CompetencesMéthodes: React.FC = () => {
  return (
    <div className="container">

      <h1> Méthodes </h1>
      
      <div className="line">

        <div className="domain">
          <h2>CICD</h2>
          <ul>
            <li>Git</li>
            <li>Github actions</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Pratiques</h2>
          <ul>
            <li>Scrum</li>
            <li>Diagrammes UML</li>
            <li>Design patterns</li>
          </ul>
        </div>

        <div className="domain">
          <h2>TDD</h2>
          <ul>
            <li>Junit</li>
            <li>pytest</li>
            <li>cargo</li>
            <li>jest</li>
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

