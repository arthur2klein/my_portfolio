import './Experience.css';

const ExperiencePrepa: React.FC = () => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">CPGE MP*</h1>
        <h3 id="date">Septembre 2019 - Juillet 2021</h3>
        <h2 id="lieu">Lycée Fabert, Metz, France</h2>
        <ul id="description">
          <li>Multiples TPs et exercices de concours en python et OCaml</li>
          <li>Simulation de l'évacuation d'un bâtiment en C++</li>
        </ul>
        <ul id="competences">
          <li>Mathématiques diverses</li>
          <li>Python</li>
          <li>OCaml</li>
          <li>C++</li>
          <li>Algorithmie</li>
          <li>Complexité</li>
          <li>Structures de données</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperiencePrepa;

