import './TabExperience.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Mousewheel, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@ionic/react/css/ionic-swiper.css';
import ExperienceLycee from '../components/experience/ExperienceLycee';
import ExperiencePrepa from '../components/experience/ExperiencePrepa';
import ExperienceCyTech from '../components/experience/ExperienceCyTech';

const TabExperience: React.FC = () => {

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mon Experience</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Mes Experience</IonTitle>
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
                return '<span class="' + className + '">' + index + '</span>';
              },
            }}
          >
            <SwiperSlide><ExperienceCyTech /></SwiperSlide>
            <SwiperSlide><ExperiencePrepa /></SwiperSlide>
            <SwiperSlide><ExperienceLycee /></SwiperSlide>
          </Swiper>
        </IonContent>
      </IonPage>
      );
};

export default TabExperience;
