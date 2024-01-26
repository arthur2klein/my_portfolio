import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <ExploreContainer name="Mes Competences" />
      </IonContent>
    </IonPage>
  );
};

export default TabCompetences;
