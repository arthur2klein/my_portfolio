import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton
 } from '@ionic/react';
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
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-moi">Moi</IonButton>
            </IonCol>
            <IonCol class="icon icon-comp">
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-comp">Mes Compétences</IonButton>
            </IonCol>
            <IonCol class="icon icon-expe">
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-expe">Mon Expérience</IonButton>
            </IonCol>
            <IonCol class="icon icon-proj">
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-proj">Mes Projets</IonButton>
            </IonCol>
            <IonCol class="icon icon-pass">
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-pass">Mes Passions</IonButton>
            </IonCol>
            <IonCol class="icon icon-cont">
              <IonButton className="fill-space button-acc" routerLink="/my_portfolio/tab-cont">Me Contacter</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default TabAccueil;
