import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetPortfolio: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Ce Portfolio</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Janvier 2024 - Mars 2024</h3>
        <ul id="description">
          <li>Création du Portfolio en React et Ionic</li>
        </ul>
        <ul id="competences">
          <li>Ionic</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/my_portfolio" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetPortfolio;

