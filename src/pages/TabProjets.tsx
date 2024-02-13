import './TabProjets.css';
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
import ProjetPortfolio from '../components/projets/ProjetPortfolio';
import ProjetGPS from '../components/projets/ProjetGPS';
import ProjetGBEmulator from '../components/projets/ProjetGBEmulator';
import ProjetCloudFront from '../components/projets/ProjetCloudFront';
import ProjetIA from '../components/projets/ProjetIA';
import ProjetJEE from '../components/projets/ProjetJEE';
import ProjetProgFonc from '../components/projets/ProjetCloudFront';
import ProjetPFE from '../components/projets/ProjetPFE';

const TabProjets: React.FC = () => {

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mes Projets</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="projets" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Mes Projets</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Swiper 
            slidesPerView={'auto'}
            spaceBetween={200}
            direction={'vertical'}
            modules={[Pagination, FreeMode, Scrollbar, Keyboard, Mousewheel, Navigation]}
            mousewheel={true}
            pagination={{clickable: true}}
            freeMode={{enabled: true, sticky: true}}
            scrollbar={true}
            loop={true}
            keyboard={true}
            navigation={true}
          >
          
            <SwiperSlide><ProjetPFE /></SwiperSlide>
            <SwiperSlide><ProjetPortfolio /></SwiperSlide>
            <SwiperSlide><ProjetGPS /></SwiperSlide>
            <SwiperSlide><ProjetCloudFront /></SwiperSlide>
            <SwiperSlide><ProjetGBEmulator /></SwiperSlide>
            <SwiperSlide><ProjetProgFonc /></SwiperSlide>
            <SwiperSlide><ProjetIA /></SwiperSlide>
            <SwiperSlide><ProjetJEE /></SwiperSlide>

          </Swiper>
        </IonContent>
      </IonPage>
      );
};

export default TabProjets;
