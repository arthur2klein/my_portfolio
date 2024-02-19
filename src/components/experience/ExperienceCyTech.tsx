import Experience from "./Experience";

const ExperienceCyTech: React.FC = () => {
  return (
    <Experience
        fonction="En École d'ingénieur, Ingénieurie du Cloud Computing"
        lieu="CY-Tech, Pau, France"
        date="Septembre 2021 - Juillet 2024"
        description={[
          "Création d'un émulatuer de gamboy en Rust",
          "Lecture de pdf avec python et Tensorflow",
          "Création de sites web divers avec Sprint, Php, Angular, Svelte, PHP, ...",
          "Reconnaissance faciale par ACP en Java.",
          "Application de suivi GPS basé sur les microservices et Kafka",
          "Recommendation de films avec bubble.io et python",
          "Ce portfolio",
        ]}
        competences={[
          "Python",
          "C",
          "Java",
          "OCaml",
          "TypeScript",
          "Angular",
          "Autres languages et frameworks",
          "Nombreuses technologies de bases de données",
          "Algorithmes et exploitation d'IA",
          "Big Data",
          "Architecture et Micro-services",
          "Et bien d'autres",
        ]}
    />
  );
};

export default ExperienceCyTech;

