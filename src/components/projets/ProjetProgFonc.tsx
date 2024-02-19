import Projet from './Projet';

const ProjetCloudFront: React.FC = () => {
  return (
    <Projet
      nom="Projet de Cloud Front"
      contexte="Cy-Tech"
      date="Novembre 2024 - Décembre 2024"
      description={[
          "Création d'un site d'organisation de soirée en Angular",
          "Association à une base de donnée Firebase",
      ]}
      competences={[
          "TypeScript",
          "Angular",
          "Firebase",
      ]}
      link="https://github.com/arthur2klein/CloudFront_2023"
    />
  );
};

export default ProjetCloudFront;

