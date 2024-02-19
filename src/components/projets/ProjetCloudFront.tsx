import Projet from './Projet';

const ProjetProgFonc: React.FC = () => {
  return (
    <Projet
      nom="Projet de Cloud Front (Angular)"
      contexte="Cy-Tech"
      date="Novembre 2023 - Décembre 2023"
      description={[
          'Création d\'un site d\'organisaition de soirée en Angular',
          'Association à une base de donnée Firebase',
      ]}
      competences={[
          'TypeScript',
          'Angular',
          'Firebase',
      ]}
      link="https://github.com/arthur2klein/CloudFront_2023/"
    />
  );
};

export default ProjetProgFonc;

