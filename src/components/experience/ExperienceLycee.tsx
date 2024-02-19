import Experience from './Experience';

const ExperienceLycee: React.FC = () => {
  return (
    <Experience
      fonction="Bac S Abibac"
      date="Septembre 2015- Juillet 2019"
      lieu="Lycée Jean de Panges, Sarreguemines, France"
      description={[
        "Sites web basiques",
        "Automates cellulaires en python",
        "Jeux divers (démineur, 2048)",
      ]}
      competences={[
        "Python",
        "html",
        "css",
      ]}
    />
  );
};

export default ExperienceLycee;
