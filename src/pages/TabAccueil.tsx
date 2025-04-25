import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
} from "@ionic/react";
import "./TabAccueil.css";

const HomeTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid class="fill-space column">
                    <IonRow class="three-per-row">
                        <IonCol>
                            <div className="menu-description">
                                <div>
                                    I am a versatile <em>Software Engineer</em> who thrives in both
                                    autonomy and team environment. My theoretical training covered a
                                    wide range of topics, from <em>AI</em> to <em>scalability</em>,
                                    exposing me to various technologies. Through education, and
                                    experimentation, I have developed affinity for tools to tackle
                                    challenges across <em>Frontend</em>, <em>Backend</em>, and{" "}
                                    <em>DevOps</em>. Now, I am eager to apply my skills to solving
                                    complex problems in a modern company.
                                </div>
                            </div>
                        </IonCol>
                        <IonCol class="icon icon-moi">
                            <IonButton
                                className="fill-space button-acc"
                                routerLink="/my_portfolio/tab-moi"
                            >
                                Me
                            </IonButton>
                        </IonCol>
                        <IonCol class="icon icon-comp">
                            <IonButton
                                className="fill-space button-acc"
                                routerLink="/my_portfolio/tab-comp"
                            >
                                My Skills
                            </IonButton>
                        </IonCol>
                        <IonCol class="icon icon-expe">
                            <IonButton
                                className="fill-space button-acc"
                                routerLink="/my_portfolio/tab-expe"
                            >
                                My Experience
                            </IonButton>
                        </IonCol>
                        <IonCol class="icon icon-proj">
                            <IonButton
                                className="fill-space button-acc"
                                routerLink="/my_portfolio/tab-proj"
                            >
                                My Projects
                            </IonButton>
                        </IonCol>
                        <IonCol class="icon icon-cont">
                            <IonButton
                                className="fill-space button-acc"
                                routerLink="/my_portfolio/tab-cont"
                            >
                                Contact Me
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default HomeTab;
