import Projet from './Projet';

const ProjetPFE: React.FC = () => {
  return (
    <Projet
      nom="Projet de Fin d'Étude: Messagerie instantannée"
      contexte="Cy-Tech"
      date="Janvier 2024 - Mars 2024"
      description={[
          "Création d'une application de messagerie en Python et React",
          "Mise en place de mesures pour la sécurité de l'application",
      ]}
      competences={[
          "Python",
          "FastAPI",
          "React",
          "Cybersécurité",
          "PostgreSQL",
      ]}
      link="https://github.com/arthur2klein/pfe_messagerie"
    />
  );
};

export default ProjetPFE;
