import Experience from './Experience';

const ExperiencePrepa: React.FC = () => {
  return (
    <Experience
      fonction="CPGE MP*"
      date="Septembre 2019 - Juillet 2021"
      lieu="Lycée Fabert, Metz, France"
      description={[
        "Multiples TPs et exercices de concours en python et OCaml",
        "Simulation de l'évacuation d'un bâtiment en C++",
      ]} 
      competences={[
        "Mathématiques diverses",
        "Python",
        "OCaml",
        "C++",
        "Algorithmie",
        "Complexité",
        "Structures de données",
      ]}
    />
  );
};

export default ExperiencePrepa;
