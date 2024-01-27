import './CompetencesWeb.css';

const CompetencesWeb: React.FC = () => {
  return (
    <div className="container">
      <h1>Développement Web</h1>
      
      <div className="line">
        <div className="domain">
          <h2>Frontend Framework</h2>
          <ul>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>Svelte</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Backend Framework</h2>
          <ul>
            <li>JEE</li>
            <li>PHP</li>
            <li>FastAPI</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Database</h2>
          <ul>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>MongoDB</li>
            <li>Neo4J</li>
            <li>Firebase</li>
            <li>SparQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetencesWeb;

