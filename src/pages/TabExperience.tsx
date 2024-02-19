import './TabExperience.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@ionic/react/css/ionic-swiper.css';
import ExperienceLycee from '../components/experience/ExperienceLycee';
import ExperiencePrepa from '../components/experience/ExperiencePrepa';
import ExperienceCyTech from '../components/experience/ExperienceCyTech';
import ExperienceKarnten from '../components/experience/ExperienceKarnten';
import ExperienceTotal from '../components/experience/ExperienceTotal';

const TabExperience: React.FC = () => {
  const type_exp = ['Stages', 'Études']

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mon Experience</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="exp" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Mes Experience</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Swiper 
            slidesPerView={'auto'}
            spaceBetween={200}
            modules={[Keyboard, Pagination]}
            loop={true}
            keyboard={true}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + type_exp[index] + '</span>';
              },
            }}
          >

            <SwiperSlide><Swiper 
              slidesPerView={'auto'}
              spaceBetween={200}
              direction={'vertical'}
              modules={[Pagination, Scrollbar, Keyboard, Mousewheel, Navigation]}
              mousewheel={true}
              pagination={{clickable: true}}
              scrollbar={true}
              loop={true}
              keyboard={true}
              navigation={true}
            >
              <SwiperSlide><ExperienceTotal /></SwiperSlide>
              <SwiperSlide><ExperienceKarnten /></SwiperSlide>

            </Swiper></SwiperSlide>

            <SwiperSlide><Swiper 
              slidesPerView={'auto'}
              spaceBetween={200}
              direction={'vertical'}
              modules={[Pagination, Scrollbar, Keyboard, Mousewheel, Navigation]}
              mousewheel={true}
              pagination={{clickable: true}}
              scrollbar={true}
              loop={true}
              keyboard={true}
              navigation={true}
            >

              <SwiperSlide><ExperienceCyTech /></SwiperSlide>
              <SwiperSlide><ExperiencePrepa /></SwiperSlide>
              <SwiperSlide><ExperienceLycee /></SwiperSlide>

            </Swiper></SwiperSlide>

          </Swiper>
        </IonContent>
      </IonPage>
      );
};

export default TabExperience;
