import './Competences.css';

const CompetencesWeb: React.FC = () => {
  return (
    <div className="container">
      <h1>Développement Web</h1>
      
      <div className="line">
        <div className="domain">
          <h2>Frontend Framework</h2>
          <ul>
            <li>Angular</li>
            <li>ReactJS</li>
            <li>Svelte</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Backend Framework</h2>
          <ul>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>Laravel</li>
            <li>Spring</li>
            <li>Symfony</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesWeb;

