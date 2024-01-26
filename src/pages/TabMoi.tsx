import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabMoi.css';

const TabMoi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Moi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Moi</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Moi" />
      </IonContent>
    </IonPage>
  );
};

export default TabMoi;
