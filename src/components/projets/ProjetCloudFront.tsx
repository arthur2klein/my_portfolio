import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetProgFonc: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Property Testing en OCamL</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Mars 2023 - Avril 2023</h3>
        <ul id="description">
          <li>Création d'un programme de Property Testing en OCamL</li>
          <li>Génération aléatoire de paramètres adaptés à la fonction à tester</li>
          <li>Vérification du succès du programme pour ces valeurs</li>
          <li>Génération de nouvelles données de tests plus simples à partir de l'example ayant échoué</li>
        </ul>
        <ul id="competences">
          <li>OCamL</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/ProjetProgFonc_groupe11" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetProgFonc;

