import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabExperience.css';

const TabExperience: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mon Expérience</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mon Expérience</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mon Expérience" />
      </IonContent>
    </IonPage>
  );
};

export default TabExperience;
