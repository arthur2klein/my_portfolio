import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabContact.css';

const TabContact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Me Contacter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Me Contacter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Me Contacter" />
      </IonContent>
    </IonPage>
  );
};

export default TabContact;
