import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetGBEmulator: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Émulateur GameBoy en Rust</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Octobre 2023 - Novembre 2023</h3>
        <ul id="description">
          <li>Création d'un émulateur de GameBoy en Rust</li>
          <li>Récupération de la mémoire de cartouches virtuelles</li>
          <li>Traduction en temps réel des OpCodes de la GameBoy</li>
          <li>Lecture de la zone mémoire d'affichage et affichage à l'écran</li>
        </ul>
        <ul id="competences">
          <li>Rust</li>
          <li>Assembleur</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/GBEmulatorRust" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetGBEmulator;

