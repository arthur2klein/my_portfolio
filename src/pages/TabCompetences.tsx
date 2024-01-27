import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CompetencesWeb from '../components/competences/CompetencesWeb';
import './TabCompetences.css';

const TabCompetences: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes Competences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes Competences</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CompetencesWeb />
      </IonContent>
    </IonPage>
  );
};

export default TabCompetences;
