import Projet from './Projet';

const ProjetJEE: React.FC = () => {
  return (
    <Projet
      nom="Site en Spring"
      contexte="Cy-Tech"
      date="Novembre 2022 - Décembre 2022"
      description={[
          "Création d'un site d'organisation de match de tennis avec Spring Boot",
          "Création d'une base de données MariaDB",
          "Dockerisation du projet (Novembre 2023)",
      ]}
      competences={[
          "Java",
          "Spring",
          "MariaDB",
          "Docker",
      ]}
      link="https://github.com/arthur2klein/projetJEE_MaghraouiMighisKlein"
    />
  );
};

export default ProjetJEE;

