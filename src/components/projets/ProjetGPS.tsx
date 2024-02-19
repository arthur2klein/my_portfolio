import Projet from './Projet';

const ProjetGPS: React.FC = () => {
  return (
    <Projet
      nom="Suivi GPS"
      contexte="Cy-Tech"
      date="Décembre 2023 - Janvier 2024"
      description={[
          "Création d'un producer Kafka pour envoyer des données GPS vraissemblables",
          "Création d'un consumer qui communique avec une base de donnée via un service",
          "Création du service communiquant avec la base de donnée",
          "Création d'une api qui fournit les informations du service",
          "Crétion d'un frontend qui affiche et actualise ces données sur une carte",
          "Dockerisation du projet",
      ]}
      competences={[
          "Python",
          "FastAPI",
          "JavaScript",
          "PostgreSQL",
          "Svelte",
          "Docker",
          "Kafka",
      ]}
      link="https://github.com/HeavY-Futhark/kafka_gps"
    />
  );
};

export default ProjetGPS;

