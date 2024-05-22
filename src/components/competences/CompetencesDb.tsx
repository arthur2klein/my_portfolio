import './Competences.css';

const CompetencesDb: React.FC = () => {
  return (
    <div className="container">
      <h1>Bases de données</h1>
      
      <div className="line">

        <div className="domain">
          <h2>SQL</h2>
          <ul>
            <li>PosgreSQL</li>
            <li>MariaDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="domain">
          <h2>NoSQL</h2>
          <ul>
            <li>MongoDB</li>
            <li>Neo4J</li>
            <li>SparQL</li>
            <li>Firebase</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default CompetencesDb;

