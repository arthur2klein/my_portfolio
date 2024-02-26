import Projet from './Projet';

const ProjetRecommendations: React.FC = () => {
  return (
    <Projet
      nom="Recommendation de films (en cours)"
      contexte="Cy-Tech"
      date="Février 2024 - Mars 2024"
      description={[
          "Création d'un site de recommendation de films pour un groupe d'utilisateur",
          "Création d'une api en FastAPI",
          "Création d'un moteur de recommendations",
          "Création d'un frontend Flutter",
      ]}
      competences={[
          "Flutter",
          "Dart",
          "Python",
          "FastAPI",
          "Postgresql",
      ]}
      link="https://github.com/arthur2klein/ProjetSuggestionFilms"
    />
  );
};

export default ProjetRecommendations;

