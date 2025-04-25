import {Redirect, Route} from "react-router-dom";
import {
    IonApp,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonIcon,
    setupIonicReact,
} from "@ionic/react";
import {arrowBackCircleOutline} from "ionicons/icons";
import {IonReactRouter} from "@ionic/react-router";
import HomeTab from "./pages/TabAccueil";
import MeTab from "./pages/TabMoi";
import SkillsTab from "./pages/TabCompetences";
import ExperienceTab from "./pages/TabExperience";
import ProjectsTab from "./pages/TabProjets";
import ContactTab from "./pages/TabContact";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./style.css";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/my_portfolio/tab-accu">
                        <HomeTab />
                    </Route>
                    <MeTab />
                    <Route exact path="/my_portfolio/tab-moi">
                        <MeTab />
                    </Route>
                    <Route exact path="/my_portfolio/tab-comp">
                        <SkillsTab />
                    </Route>
                    <Route exact path="/my_portfolio/tab-expe">
                        <ExperienceTab />
                    </Route>
                    <Route exact path="/my_portfolio/tab-proj">
                        <ProjectsTab />
                    </Route>
                    <Route exact path="/my_portfolio/tab-cont">
                        <ContactTab />
                    </Route>
                    <Route exact path="/my_portfolio">
                        <Redirect to="/my_portfolio/tab-accu" />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/my_portfolio/tab-accu" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="TabAccueil" href="/my_portfolio/tab-accu">
                        <IonIcon icon={arrowBackCircleOutline} />
                        <IonLabel className="if-not-wide">Summary</IonLabel>
                    </IonTabButton>
                    <IonTabButton className="if-wide" tab="TabMoi" href="/my_portfolio/tab-moi">
                        <IonLabel>Me</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        className="if-wide"
                        tab="TabCompetences"
                        href="/my_portfolio/tab-comp"
                    >
                        <IonLabel>My Skills</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        className="if-wide"
                        tab="TabExperience"
                        href="/my_portfolio/tab-expe"
                    >
                        <IonLabel>My Experience</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        className="if-wide"
                        tab="TabProjets"
                        href="/my_portfolio/tab-proj"
                    >
                        <IonLabel>My Projects</IonLabel>
                    </IonTabButton>
                    <IonTabButton
                        className="if-wide"
                        tab="TabContact"
                        href="/my_portfolio/tab-cont"
                    >
                        <IonLabel>Contact me</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
