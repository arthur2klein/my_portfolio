import './Competences.css';

const CompetencesLanguages: React.FC = () => {
  return (
    <div className="container">

      <h1> Languages de programmation </h1>
      
      <div className="line">

        <div className="domain">
          <h2>Maîtrise élevée</h2>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Java</li>
            <li>C</li>
            <li>Commandes UNIX</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Compétences Intermédiaires</h2>
          <ul>
            <li>Dart</li>
            <li>Kotlin</li>
            <li>C++</li>
            <li>Rust</li>
            <li>Assembleur</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Compétences basiques</h2>
          <ul>
            <li>OCaml</li>
            <li>R</li>
            <li>php</li>
            <li>Prolog</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesLanguages;

