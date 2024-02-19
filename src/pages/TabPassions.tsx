import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabPassions.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import '@ionic/react/css/ionic-swiper.css';

const TabPassions: React.FC = () => {
  const passions = ['musique', 'cuisine']
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes Passions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mes Passions</IonTitle>
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
              return '<span class="' + className + '">' + passions[index] + '</span>';
            },
          }}
        >
          <SwiperSlide> 
            <div className="placeholder">
              <h1>Cet onglet présentera mon expérience en terme de cuisine.</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="placeholder">
              <h1>Cet onglet présentera ma passion pour la musique et ce qu'elle a pu m'apporter.</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default TabPassions;

