import './Competences.css';

const CompetencesLanguages: React.FC = () => {
  return (
    <div className="container">

      <h1> Languages de programmation </h1>
      
      <div className="line">

        <div className="domain">
          <h2>Maîtrise élevée</h2>
          <ul>
            <li>Bash</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Scala</li>
            <li>Typescript</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Compétences Intermédiaires</h2>
          <ul>
            <li>Assembleur</li>
            <li>C++</li>
            <li>C</li>
            <li>Dart</li>
            <li>Kotlin</li>
            <li>Rust</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Compétences basiques</h2>
          <ul>
            <li>Go</li>
            <li>OCaml</li>
            <li>Prolog</li>
            <li>R</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesLanguages;

