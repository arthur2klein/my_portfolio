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
        <div className="placeholder">
          <h1>Cette page me présentera briévement à travers mon expérience et mes objectifs.</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabMoi;
