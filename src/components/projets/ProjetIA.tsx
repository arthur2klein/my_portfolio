import {IonButton} from '@ionic/react';
import './Projet.css';

const ProjetIA: React.FC = () => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">Comparaison Algorithmes d'IA</h1>
        <h2 id="contexte">Cy-Tech</h2>
        <h3 id="date">Janvier 2023 - Février 2023</h3>
        <ul id="description">
          <li>TDs d'Algorithmes d'IA pour l'année d'ING2</li>
          <li>Création d'un programme d'optimisation par LAHC en python</li>
          <li>Création d'un programme d'optimisation par Recuit Simulé en python</li>
          <li>Création d'un programme d'optimisation par PSO en python</li>
          <li>Ré-écriture pour n'avoir qu'un projet</li>
          <li>Comparaison des méthodes et des différentes stratégies au sein des méthodes pour divers problèmes</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>Algorithmes d'IA</li>
        </ul>
        <IonButton id="lien_projet" href="https://github.com/arthur2klein/IA_ING2_2023" target="_blank" rel="noopener noreferrer">Voir le projet</IonButton>
      </div>

    </div>
  );
};

export default ProjetIA;

