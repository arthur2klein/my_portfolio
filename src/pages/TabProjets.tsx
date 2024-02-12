import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabProjets.css';

const TabProjets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes Projets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes Projets</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Mes Projets" />
      </IonContent>
    </IonPage>
  );
};

export default TabProjets;

