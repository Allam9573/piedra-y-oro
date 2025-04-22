import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import anillo from '../assets/img/anillo.jpeg'
import logo from '../assets/img/logo_verde.png'
import logoRosa from '../assets/img/logo_blanco.png'
import '../assets/css/styles.css'
import '../assets/js/carousel.js'
import '../assets/css/carousel.css'

export const Header = () => {

    const { promociones } = usePromociones();
    const carouselRef = useRef(null);

    useEffect(() => {
        if (promociones && promociones.length > 0 && carouselRef.current) {
            const carousel = carouselRef.current;
            let currentIndex = 0;
            // new window.bootstrap.Carousel(carouselRef.current);

            const updateCarousel = () => {
                const items = carousel.querySelectorAll('.carousel-item');
                items.forEach((item, index) => {
                    if (index === currentIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            };

            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % promociones.length;
                updateCarousel();
            };

            const prevSlide = () => {
                currentIndex = (currentIndex - 1 + promociones.length) % promociones.length;
                updateCarousel();
            };

            const nextButton = carousel.querySelector('.carousel-control-next');
            const prevButton = carousel.querySelector('.carousel-control-prev');

            nextButton.addEventListener('click', nextSlide);
            prevButton.addEventListener('click', prevSlide);

            updateCarousel(); // Inicializar el carrusel con el primer slide

            return () => {
                // Limpiar los event listeners al desmontar el componente
                nextButton.removeEventListener('click', nextSlide);
                prevButton.removeEventListener('click', prevSlide);
            };
        }
    }, [promociones]);

    if (!promociones) {
        return <div>Cargando promociones...</div>;
    }

    // desktop-header
    return (
        <>
            {
                promociones.length !== 0 ?
                    <>
                        <div className='desktop-header'>
                            <Swiper
                                pagination={{ clickable: true, dynamicBullets: true }}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                loop={true}
                                modules={[Pagination, Autoplay]}
                                className="w-100 m-0 p-0 min-vh-100 position-relative"
                            >
                                {promociones.map((promo, index) => (
                                    <SwiperSlide key={index} className="promo-con w-100">
                                        <div className="promo-con w-100">
                                            <div className="row w-100 flex-column-reverse flex-md-row">
                                                <div
                                                    className="col-12 col-lg-6 text-start d-flex flex-column justify-content-center align-items-start px-4 px-lg-5 py-5 pb-5 pb-lg-4"
                                                    style={{ backgroundColor: "#fff" }}
                                                >
                                                    <img src={logoRosa} className="mb-3 img-fluid w-50 w-md-25" alt="Logo" />
                                                    <div className="text-start w-100 px-3">
                                                        <h2 className='title-promo'>Joyeria Piedra & Oro</h2>
                                                        <p className="title-promocion mt-4">{promo.titulo}</p>
                                                        <p className="descripcion-promocion mb-5">{promo.descripcion}</p>
                                                        <Link to={`/promociones/${promo.id}`} className="btn-call my-5">Inspírate</Link>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 text-center p-0">
                                                    <img
                                                        className="img-fluid w-100"
                                                        style={{ objectFit: "cover", minHeight: "100vh" }}
                                                        src={promo.imagen}
                                                        alt="Anillo"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </> :
                    <>
                        <div className="w-100 d-flex flex-column align-items-center justify-content-center vh-100">
                            <div class="spinner-border text-secondary m-3" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <h3 className='text-secondary'>Cargando contenido...</h3>
                        </div>
                    </>
            }
            <div ref={carouselRef} id="headerCarousel" className="header-mobile carousel slide" data-ride="carousel" data-interval="1000">
                <div className="carousel-inner">
                    {promociones.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${item.imagen})`, height: '600px' }}
                        >
                            <div style={{ backgroundColor: '#343A36' }} className="text-white carousel-caption text-center">
                                <h5 className='title-promo-mobile'>{item.titulo}</h5>
                                <p className='descripcion-home-anillos text-white'>{item.descripcion}</p>
                                <Link to={`/promociones/${item.id}`} className='btn-inspirate my-5'>Inspírate</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#headerCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#headerCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
            {/* 
            <div className="heaeder-mobile">

            </div> */}
        </>
    )
}
