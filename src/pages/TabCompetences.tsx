import './TabCompetences.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import CompetencesWeb from '../components/competences/CompetencesWeb';
import CompetencesMobile from '../components/competences/CompetencesMobile';
import CompetencesLanguages from '../components/competences/CompetencesLanguages';
import CompetencesMéthodes from '../components/competences/CompetencesMethodes';
import CompetencesMath from '../components/competences/CompetencesMath';
import CompetencesCommunication from '../components/competences/CompetencesCommunication';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Mousewheel, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@ionic/react/css/ionic-swiper.css';

const TabCompetences: React.FC = () => {
  const slide_names = ['lan', 'web', 'mob', 'mét', 'mat', 'com']

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mes Competences</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Mes Competences</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Swiper 
            slidesPerView={'auto'}
            spaceBetween={200}
            direction={'vertical'}
            modules={[FreeMode, Scrollbar, Keyboard, Pagination, Mousewheel, Navigation]}
            mousewheel={true}
            freeMode={{enabled: true, sticky: true}}
            scrollbar={true}
            loop={true}
            keyboard={true}
            navigation={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + slide_names[index] + '</span>';
              },
            }}
          >
            <SwiperSlide><CompetencesLanguages /></SwiperSlide>
            <SwiperSlide><CompetencesWeb /></SwiperSlide>
            <SwiperSlide><CompetencesMobile /></SwiperSlide>
            <SwiperSlide><CompetencesMéthodes /></SwiperSlide>
            <SwiperSlide><CompetencesMath /></SwiperSlide>
            <SwiperSlide><CompetencesCommunication /></SwiperSlide>
          </Swiper>
        </IonContent>
      </IonPage>
      );
};

export default TabCompetences;