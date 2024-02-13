import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetPFE: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Projet de Fin d'Étude: Messagerie instantannée (en cours)</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Janvier 2024 - Mars 2024</h3>
        <ul id="description">
          <li>Création d'une application de messagerie en Python et Angular</li>
          <li>Mise en place de mesures pour la sécurité de l'application</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>FastAPI</li>
          <li>Angular</li>
          <li>PostgreSQL</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/pfe_messagerie" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetPFE;

