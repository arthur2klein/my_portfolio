import Projet from './Projet';

const ProjetGBEmulator: React.FC = () => {
  return (
    <Projet
      nom="Émulateur GameBoy en Rust"
      contexte="Cy-Tech"
      date="Octobre 2023 - Novembre 2023"
      description={[
          "Création d'un émulateur de GameBoy en Rust",
          "Récupération de la mémoire de cartouches virtuelles",
          "Traduction en temps réel des OpCodes de la GameBoy",
          "Lecture de la zone mémoire d'affichage et affichage à l'écran",
    ]}
      competences={[
          "Rust",
          "Assembleur",
      ]}
      link="https://github.com/arthur2klein/GBEmulatorRust"
    />
  );
};

export default ProjetGBEmulator;

