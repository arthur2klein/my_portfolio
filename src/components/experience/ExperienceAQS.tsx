import Experience from './Experience';

const ExperienceAQS: React.FC = () => {
  return (
    <Experience
      fonction="Stagiaire, Équipes Projet et R&D d'Anaqua Services"
      lieu="Anaqua Services, Pau, France"
      date="Avril 2024 - Octobre 2024"
      description={[
        "Participation aux projets de développement d'Anaqua Services",
        "Contribution au backend PHP",
        "Contribution au frontend React",
        "Intégration de l'IA dans les outils de l'entreprise",
      ]}
      competences={[
        "PHP",
        "Symfony",
        "Typescript",
        "React",
        "Test Driven Development",
        "Domain Driven Development",
      ]}
    />
  );
};

export default ExperienceAQS;

