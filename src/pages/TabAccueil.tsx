import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton
 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './TabAccueil.css';

const TabAccueil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid class="fill-space column">
          <IonRow class="three-per-row">
            <IonCol class="icon icon-moi">
              <IonButton fill="clear" className="fill-space" href="/tab-moi">Moi</IonButton>
            </IonCol>
            <IonCol class="icon icon-comp">
              <IonButton fill="clear" className="fill-space" href="/tab-comp">Mes Compétences</IonButton>
            </IonCol>
            <IonCol class="icon icon-expe">
              <IonButton fill="clear" className="fill-space" href="/tab-expe">Mon Expérience</IonButton>
            </IonCol>
            <IonCol class="icon icon-proj">
              <IonButton fill="clear" className="fill-space" href="/tab-proj">Mes Projets</IonButton>
            </IonCol>
            <IonCol class="icon icon-pass">
              <IonButton fill="clear" className="fill-space" href="/tab-pass">Mes Passions</IonButton>
            </IonCol>
            <IonCol class="icon icon-cont">
              <IonButton fill="clear" className="fill-space" href="/tab-cont">Me Contacter</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TabAccueil;
