import React from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import anillo from '../assets/img/anillo.jpeg'
import logo from '../assets/img/logo_verde.png'
import logoRosa from '../assets/img/logo_rosado.png'
import '../assets/css/styles.css'

export const Header = () => {

    const { promociones } = usePromociones();

    return (
        <>
            {/* <Swiper
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="w-100 promo-con desktop-only min-vh-100 position-relative"
            >
                {promociones.map((promo, index) => (
                    <SwiperSlide key={index} className="promo-con w-100">
                        <div className="promo-con w-100">
                            <div className="row w-100 flex-column-reverse flex-md-row">
                           
                                <div
                                    className="col-12 col-lg-6 text-start d-flex flex-column justify-content-center align-items-start px-4 px-lg-5 py-5 pb-5 pb-lg-4"
                                    style={{ backgroundColor: "#343A36" }}
                                >
                                    <img src={logoRosa} className="mb-3 img-fluid w-50 w-md-25" alt="Logo" />
                                    <div className="text-start w-100">
                                        <p className="title-promocion mt-4">{promo.titulo}</p>
                                        <p className="descripcion-promocion mb-5">{promo.descripcion}</p>
                                        <Link to={`/promociones/${promo.id}`} className="btn-call my-5">Inspírate</Link>
                                    </div>
                                </div>

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
            </Swiper> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {
                            promociones.map
                        }
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="header-mobile">
                fwq
            </div>
        </>
    )
}
