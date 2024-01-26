import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse } from 'ionicons/icons';
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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab-accu">
            <TabAccueil />
          </Route>
          <Route exact path="/tab-moi">
            <TabMoi />
          </Route>
          <Route exact path="/tab-comp">
            <TabCompetences />
          </Route>
          <Route exact path="/tab-expe">
            <TabExperience />
          </Route>
          <Route exact path="/tab-proj">
            <TabProjets />
          </Route>
          <Route exact path="/tab-pass">
            <TabPassions />
          </Route>
          <Route exact path="/tab-cont">
            <TabContact />
          </Route>
          <Route exact path="/my_portfolio">
            <Redirect to="/tab-accu" />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab-accu" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="TabMoi" href="/tab-moi">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Moi</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabCompetences" href="/tab-comp">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Mes Compétences</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabExperience" href="/tab-expe">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Mon Expérience</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabProjets" href="/tab-proj">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Mes Projets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabPassions" href="/tab-pass">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Mes Passions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabContact" href="/tab-cont">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Me Contacter</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
