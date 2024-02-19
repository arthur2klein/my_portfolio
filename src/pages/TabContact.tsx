import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabContact.css';
import ContactComponent from '../components/ContactComponent';

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
        <ContactComponent />
      </IonContent>
    </IonPage>
  );
};

export default TabContact;
