import Experience from './Experience';

const ExperienceKarnten: React.FC = () => {
  return (
    <Experience
        fonction="Stagiaire, développement mobile"
        lieu="CISMAT (Carinthia Institute of Smart Materials), Fachhochschule Kärnten, Villach, Autriche"
        date="Juin 2022 - Août 2022"
        description={[
          "Développement d'une application Android pour la visualisation et l'exportation de données",
          "Développement du programme Java fournissant les données d'un capteur à cette application via Sockets",
        ]}
        competences={[
          "Framework Kotlin pour Android",
          "Allemand",
        ]}
    />
  );
};

export default ExperienceKarnten;
