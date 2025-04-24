import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import styles from './SwipeImg.module.scss';

import img3 from '../../img/2.png'
import img4 from '../../img/Untitled.png'
import img5 from '../../img/image-4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwipeImg = () => {
    return (
        <div className={styles.swiperContainer}>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className={styles.swiper}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                <SwiperSlide>
                    <img src={img5} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide 1" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwipeImg;