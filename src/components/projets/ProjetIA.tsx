import Projet from './Projet';

const ProjetIA: React.FC = () => {
  return (
    <Projet
      nom="Comparaison Algorithmes d'IA"
      contexte="Cy-Tech"
      date="Janvier 2023 - Février 2023"
      description={[
          "TDs d'Algorithmes d'IA pour l'année d'ING2",
          "Création d'un programme d'optimisation par LAHC en python",
          "Création d'un programme d'optimisation par Recuit Simulé en python",
          "Création d'un programme d'optimisation par PSO en python",
          "Ré-écriture pour n'avoir qu'un projet",
          "Comparaison des méthodes et des différentes stratégies au sein des méthodes pour divers problèmes",
      ]}
      competences={[
          "Python",
          "Algorithmes d'IA",
      ]}
      link="https://github.com/arthur2klein/IA_ING2_2023"
    />
  );
};

export default ProjetIA;

