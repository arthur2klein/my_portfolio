import "./TabCompetences.css";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Scrollbar, Mousewheel, Pagination, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "@ionic/react/css/ionic-swiper.css";
import WebSkills from "../components/competences/CompetencesWeb";
import MobileSkills from "../components/competences/CompetencesMobile";
import LanguageSkills from "../components/competences/CompetencesLanguages";
import MethodSkills from "../components/competences/CompetencesMethodes";
import MathSkills from "../components/competences/CompetencesMath";
import CommunicationSkills from "../components/competences/CompetencesCommunication";
import DevOpsSkills from "../components/competences/CompetencesCicd";
import DatabaseSkills from "../components/competences/CompetencesDb";

const SkillsTab: React.FC = () => {
    const slide_names = [
        "Langua",
        "DevWeb",
        "Mobile",
        "DataBa",
        "DevOps",
        "Method",
        "IA-Sim",
        "Commun",
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My Skills</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">My Skills</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={200}
                    direction={"vertical"}
                    modules={[Pagination, Scrollbar, Keyboard, Mousewheel, Navigation]}
                    mousewheel={true}
                    scrollbar={true}
                    loop={true}
                    keyboard={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return (
                                '<span class="' + className + '">' + slide_names[index] + "</span>"
                            );
                        },
                    }}
                >
                    <SwiperSlide>
                        <LanguageSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <WebSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MobileSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DatabaseSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DevOpsSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MethodSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MathSkills />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommunicationSkills />
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default SkillsTab;
