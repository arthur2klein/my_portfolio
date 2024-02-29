import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  setupIonicReact
} from '@ionic/react';
import { arrowBackCircleOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import TabAccueil from './pages/TabAccueil';
import TabMoi from './pages/TabMoi';
import TabCompetences from './pages/TabCompetences';
import TabExperience from './pages/TabExperience';
import TabProjets from './pages/TabProjets';
import TabPassions from './pages/TabPassions';
import TabContact from './pages/TabContact';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './style.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/my_portfolio/tab-accu">
            <TabAccueil />
          </Route>
          <TabMoi />
          <Route exact path="/my_portfolio/tab-moi">
            <TabMoi />
          </Route>
          <Route exact path="/my_portfolio/tab-comp">
            <TabCompetences />
          </Route>
          <Route exact path="/my_portfolio/tab-expe">
            <TabExperience />
          </Route>
          <Route exact path="/my_portfolio/tab-proj">
            <TabProjets />
          </Route>
          <Route exact path="/my_portfolio/tab-pass">
            <TabPassions />
          </Route>
          <Route exact path="/my_portfolio/tab-cont">
            <TabContact />
          </Route>
          <Route exact path="/my_portfolio">
            <Redirect to="/my_portfolio/tab-accu" />
          </Route>
          <Route exact path="/">
            <Redirect to="/my_portfolio/tab-accu" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" >
          <IonTabButton tab="TabAccueil" href="/my_portfolio/tab-accu">
            <IonIcon icon={arrowBackCircleOutline} />
            <IonLabel className="if-not-wide">Sommaire</IonLabel>
          </IonTabButton>
          <IonTabButton className="if-wide" tab="TabMoi" href="/my_portfolio/tab-moi">
            <IonLabel>Moi</IonLabel>
          </IonTabButton>
          <IonTabButton className="if-wide" tab="TabCompetences" href="/my_portfolio/tab-comp">
            <IonLabel>Mes Compétences</IonLabel>
          </IonTabButton>
          <IonTabButton className="if-wide" tab="TabExperience" href="/my_portfolio/tab-expe">
            <IonLabel>Mon Expérience</IonLabel>
          </IonTabButton>
          <IonTabButton className="if-wide" tab="TabProjets" href="/my_portfolio/tab-proj">
            <IonLabel>Mes Projets</IonLabel>
          </IonTabButton>
          <IonTabButton className="if-wide" tab="TabContact" href="/my_portfolio/tab-cont">
            <IonLabel>Me Contacter</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
