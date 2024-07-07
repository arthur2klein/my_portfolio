import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <div className="moi">
          <div className="name-moi">
            KLEIN Arthur
          </div>
          <div className="line-moi">
            <img className="photo" src="arthur20230627.jpg" />

            <div className="cadre-alt desc-moi">
              Je suis <em>KLEIN Arthur</em>, passionné d'informatique depuis
              une formation débutant au lycée (filière S Abibac) à travers les
              cours d'Informatique et Création Numérique, et en CPGE (MP*) à
              travers les cours généraux et de spécialité Informatique. Cet
              éveil m'a mené à terminer ma fomation à <em>CY-Tech</em> où mon
              intért s'est particulièrement développé pour la création
              de <em>frontends</em>, explorant notamment React et Flutter,
              d'<em>architecture d'application</em> utilisant divers
              technologies de Backend ainsi que github actions et Kubernetes,
              et dans l'<em>analyse de données</em> et l'IA avec notamment
              Spark et Tensorflow.
            </div>

            <div className="cadre expe-moi">
              L'<em>architecture de projets</em>, l'utilisation de Git, Docker,
              Kubernetes, et d'autres outils ont été des piliers de ma
              spécialisation en Cloud Computing à CY-Tech. Je consolide cette
              expertise avec la maîtrise du développement d'interfaces pour
              le <em>web</em> et le <em>mobile</em>, tout en approfondissant
              mes compétences à travers des cours de traitement de données et
              des projets inter-options intégrant l'<em>Intelligence
              Artificielle</em> pour une expérience utilisateur enrichissante.
            </div>

            <div className="cadre obje-moi">
              À la suite de ma formation, je suis en stage de fin
              d'étude et en <em>recherche de CDI</em>. Mon objectif est de
              m'investir pleinement dans des projets stimulants qui mettent en
              lumière mes compétences. Passionné par l'apprentissage continu,
              je souhaite exploiter cette opportunité pour <em>approfondir et
              diversifier mes connaissances</em>. Contribuer à des projets
              innovants où mon expertise sera valorisée est ma priorité. Si
              vous recherchez un développeur dynamique, curieux et prêt à relever
              de nouveaux défis, n'hésitez pas à me contacter.
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabMoi;
