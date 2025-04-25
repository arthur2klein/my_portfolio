import Projet from "./Projet";

const ProjetRecommendations: React.FC = () => {
    return (
        <Projet
            nom="Movie recommendation"
            contexte="Cy-Tech"
            date="February 2024 - March 2024"
            description={[
                "Creation of an app to recommend movies to a group of user",
                "Creation of a FastAPI backend",
                "Creation of a recommendation engine",
                "Creation of a Flutter frontend",
            ]}
            competences={["Flutter", "Dart", "Python", "FastAPI", "Postgresql"]}
            link="https://github.com/arthur2klein/ProjetSuggestionFilms"
        />
    );
};

export default ProjetRecommendations;
