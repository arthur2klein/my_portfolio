import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetProgFonc: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Projet de Cloud Front (Angular)</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Novembre 2023 - Décembre 2023</h3>
        <ul id="description">
          <li>Création d'un site d'organisaition de soirée en Angular</li>
          <li>Association à une base de donnée Firebase</li>
        </ul>
        <ul id="competences">
          <li>TypeScript</li>
          <li>Angular</li>
          <li>Firebase</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/CloudFront_2023/" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetProgFonc;

