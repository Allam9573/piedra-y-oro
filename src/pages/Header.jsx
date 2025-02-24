import React from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import anillo from '../assets/img/anillo.jpeg'
import logo from '../assets/img/logo_verde.png'
import '../assets/css/styles.css'

export const Header = () => {

    const { promociones } = usePromociones();

    return (
        <Swiper
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="w-100 min-vh-100 position-relative"
        >
            {promociones.map((promo, index) => (
                <SwiperSlide key={index} className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center w-100">
                        <div className="row w-100 flex-column-reverse flex-lg-row g-0">
                            {/* Contenido de texto */}
                            <div
                                className="col-12 col-lg-6 text-start d-flex flex-column justify-content-center align-items-start px-4 px-lg-5 py-5 pb-5 pb-lg-4"
                                style={{ backgroundColor: "#C7D0CF" }}
                            >
                                <img src={logo} className="mb-3 img-fluid w-50 w-md-25" alt="Logo" />
                                <div className="text-start w-100">
                                    <p className="title-promocion mt-4">{promo.titulo}</p>
                                    <p className="descripcion-promocion mb-5">{promo.descripcion}</p>
                                    <Link to="/productos" className="btn-call my-5">Inspírate</Link>
                                </div>
                            </div>

                            {/* Contenedor de imagen con altura optimizada */}
                            <div className="col-12 col-lg-6 text-center p-0">
                                <img
                                    className="img-fluid w-100"
                                    style={{ objectFit: "cover", maxHeight: "100vh" }}
                                    src={promo.imagen}
                                    alt="Anillo"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>


    )
}
