import {IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import "./TabContact.css";
import ContactComponent from "../components/ContactComponent";

const ContactTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Contact Me</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Contact Me</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ContactComponent />
            </IonContent>
        </IonPage>
    );
};

export default ContactTab;
