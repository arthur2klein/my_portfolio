import Experience from './Experience';

const ExperienceTotal: React.FC = () => {
  return (
    <Experience
      fonction="Stagiaire, Adaptation d'un programme Python"
      lieu="TotalEnergies, Pau, France"
      date="Juillet 2023 - Septembre 2023"
      description={[
        "Correction d'erreurs dans un programme python de prédiction",
        "Réparation du dépôt git du projet",
        "Adaptation du prgramme au outils préférés par TotalEnergies",
        "Début d'interprétation",
      ]}
      competences={[
        "Python",
        "Data Assimilation",
        "Git",
      ]}
    />
  );
};

export default ExperienceTotal;

