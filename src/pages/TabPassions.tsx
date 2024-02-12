import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabPassions.css';

const TabPassions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes Passions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes Passions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mes Passions" />
      </IonContent>
    </IonPage>
  );
};

export default TabPassions;

