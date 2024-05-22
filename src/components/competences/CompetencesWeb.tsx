import './Competences.css';

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
            <li>Laravel</li>
            <li>Symfony</li>
            <li>Spring</li>
            <li>FastAPI</li>
            <li>Flask</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesWeb;

