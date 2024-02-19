import {IonButton} from '@ionic/react';
import './Projet.css';

interface ProjetProps {
  nom: string;
  contexte: string;
  date: string;
  description: string[];
  competences: string[];
  link: string;
}

const Projet: React.FC<ProjetProps> = ({
  nom,
  contexte,
  date,
  description,
  competences,
  link
}) => {
  return (
    <div className="container">

      <div className="projet">
        <h1 id="nom">{ nom }</h1>
        <h2 id="contexte">{ contexte }</h2>
        <h3 id="date">{ date }</h3>
        <ul id="description">
          {description.map((item) => (
            <li>{ item }</li>
          ))}
        </ul>
        <ul id="competences">
          {competences.map((item) => (
            <li>{ item }</li>
          ))}
        </ul>
        <IonButton
          id="lien_projet"
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
        > Voir le projet </IonButton>
      </div>

    </div>
  );
};

export default Projet;

