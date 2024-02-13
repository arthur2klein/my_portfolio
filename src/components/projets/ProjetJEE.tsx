import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetJEE: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Site en Spring</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Novembre 2022 - Décembre 2022</h3>
        <ul id="description">
          <li>Création d'un site d'organisation de match de tennis avec Spring Boot</li>
          <li>Création d'une base de données MariaDB</li>
          <li>Dockerisation du projet (Novembre 2023)</li>
        </ul>
        <ul id="competences">
          <li>Java</li>
          <li>Spring</li>
          <li>MariaDB</li>
          <li>Docker</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/projetJEE_MaghraouiMighisKlein" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetJEE;

