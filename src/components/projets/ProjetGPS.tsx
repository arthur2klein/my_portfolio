import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetGPS: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Suivi GPS</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Décembre 2023 - Janvier 2024</h3>
        <ul id="description">
          <li>Création d'un producer Kafka pour envoyer des données GPS vraissemblables</li>
          <li>Création d'un consumer qui communique avec une base de donnée via un service</li>
          <li>Création du service communiquant avec la base de donnée</li>
          <li>Création d'une api qui fournit les informations du service</li>
          <li>Crétion d'un frontend qui affiche et actualise ces données sur une carte</li>
          <li>Dockerisation du projet</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>FastAPI</li>
          <li>JavaScript</li>
          <li>PostgreSQL</li>
          <li>Svelte</li>
          <li>Docker</li>
          <li>Kafka</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/HeavY-Futhark/kafka_gps" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetGPS;

