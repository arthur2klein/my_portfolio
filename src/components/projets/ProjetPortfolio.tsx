import Projet from './Projet';

const ProjetPortfolio: React.FC = () => {
  return (
    <Projet
      nom="Ce Portfolio"
      contexte="Cy-Tech"
      date="Janvier 2024 - Mars 2024"
      description={[
          "Création du Portfolio en React et Ionic",
      ]}
      competences={[
          "Ionic",
          "React",
          "TypeScript",
      ]}
      link="https://github.com/arthur2klein/my_portfolio"
    />
  );
};

export default ProjetPortfolio;

