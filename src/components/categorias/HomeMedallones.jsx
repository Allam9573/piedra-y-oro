import React, { useState } from 'react'
import medallon from '../../assets/img/image2.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
import anillo1 from '../../assets/img/image1.png'
import anillo2 from '../../assets/img/modelo1.jpg'
import { useHomeInfo } from '../../hooks/useHomeInfo'

export const HomeMedallones = () => {

    const { infoMedallones } = useHomeInfo();
    const imagenesAnillos = [anillo1, anillo2];
    console.log(infoMedallones)
    return (
        <>
            <div className="desktop-medallones-only row mx-0 px-0 w-100  flex-lg-row align-items-center text-center text-lg-start">
                <div className="col-12 mx-0 px-0 col-lg-6 text-center">
                    <div id="carouselMedallones" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {imagenesAnillos.map((imagen, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img className="img-fluid w-100 image" style={{ objectFit: "cover", height: '850px' }} src={imagen} alt={`Anillo ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMedallones" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMedallones" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 px-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    {infoMedallones.map((medallon) => (
                        <div key={medallon.id} className="mb-4">
                            <h2 className="title mb-3" style={{ color: '#E7D7C9' }}>{medallon.titulo}</h2>
                            <h3 style={{ color: '#C7D0CF' }} className="mb-3 fs-5  fs-lg-3">{medallon.descripcion}</h3>
                        </div>
                    ))}
                    <Link
                        to={"/productos?categoria=Medallones"}
                        style={{ backgroundColor: '#E7D7C9' }}
                        className="btn mb-5 mb-lg-3 p-2 p-lg-4 fs-4 btn-lg btn-shadow"
                    >
                        Comprar Ahora
                    </Link>
                </div>
            </div>
            <div className="home-medallones-mobile">
                <div className="text-center py-3">
                    {
                        infoMedallones.map(info => (
                            <>
                                <h2 className='title-home-anillos '>{info.titulo}</h2>
                                <div className='d-flex justify-content-center mt-4'>
                                    <img className='home-anillos-home-imagen' src={anillo1} alt="" />
                                    <img className='home-anillos-home-imagen' src={anillo2} alt="" />
                                </div>
                                <p className='text-secondary descripcion-home-anillos mx-2 my-3'>{info.descripcion}</p>
                                <Link to={"/productos?categoria=Medallones"} className='btn-home-mobile'>Comprar Ahora</Link>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
