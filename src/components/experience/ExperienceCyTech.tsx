import './Experience.css';

const ExperienceCyTech: React.FC = () => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">En école d'ingénieur, Ingénieurie du Cloud Computing</h1>
        <h2 id="lieu">CY-Tech, Pau, France</h2>
        <h3 id="date">Septembre 2021 - Juillet 2024</h3>
        <ul id="description">
          <li>Création d'un émulatuer de gamboy en Rust</li>
          <li>Lecture de pdf avec python et Tensorflow</li>
          <li>Création de sites web divers avec Sprint, Php, Angular, Svelte, PHP, ...</li>
          <li>Reconnaissance faciale par ACP en Java.</li>
          <li>Application de suivi GPS basé sur les microservices et Kafka</li>
          <li>Recommendation de films avec bubble.io et python</li>
          <li>Ce portfolio</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>C</li>
          <li>Java</li>
          <li>OCaml</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>Autres languages et frameworks</li>
          <li>Nombreuses technologies de bases de données</li>
          <li>Algorithmes et exploitation d'IA</li>
          <li>Big Data</li>
          <li>Architecture et Micro-services</li>
          <li>Et bien d'autres</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperienceCyTech;

