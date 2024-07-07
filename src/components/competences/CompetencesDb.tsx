import './Competences.css';

const CompetencesDb: React.FC = () => {
  return (
    <div className="container">
      <h1>Bases de données</h1>
      
      <div className="line">

        <div className="domain">
          <h2>SQL</h2>
          <ul>
            <li>MariaDB</li>
            <li>MySQL</li>
            <li>PosgreSQL</li>
          </ul>
        </div>

        <div className="domain">
          <h2>NoSQL</h2>
          <ul>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Neo4J</li>
            <li>SparQL</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default CompetencesDb;

