import { usePromociones } from '../hooks/usePromociones'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../assets/css/promociones.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Promociones = ({ promociones }) => {

    return (
        <div className="container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='promociones-container'
            >
                {
                    promociones.map(promocion => (
                        <SwiperSlide key={promocion.id} className='d-flex justify-content-center align-items-center'>
                            <img src={promocion.imagen} className='' alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
