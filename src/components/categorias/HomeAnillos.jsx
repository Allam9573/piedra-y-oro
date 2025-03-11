import React from 'react'
import anillo1 from '../../assets/img/image1.png'
import anillo2 from '../../assets/img/modelo1.jpg'
import anillo3 from '../../assets/img/image1.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
import { useHomeInfo } from '../../hooks/useHomeInfo'

export const HomeAnillos = () => {

    const { infoAnillos } = useHomeInfo();
    const imagenesAnillos = [anillo1, anillo2];
    console.log(infoAnillos)
    return (
        <>
            <div className="desktop-only container-anillos-brown h-100">
                <div
                    id="puntoRegistro"
                    className="row con mx-0 px-0 w-100 flex-column-reverse flex-lg-row align-items-center text-center text-lg-start"
                >
                    <div style={{ height: '850px' }} className="con-anillos-left col-12 col-lg-6 px-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                        {
                            infoAnillos.map(infoAnillo => (
                                <>
                                    <h2 className="title" style={{ color: "#E7D7C9" }}>{infoAnillo.titulo}</h2>
                                    <h3 className="my-3 fs-5 fs-lg-3" style={{ color: "#C7D0CF" }}>
                                        {infoAnillo.descripcion}
                                    </h3>
                                    <Link
                                        to={`/productos?categoria=Anillos`}
                                        className="btn-home-anillos"
                                    >
                                        Explora el amor y el compromiso
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                    <div className="col-12 mx-0 px-0 col-lg-6">
                        <div id="carouselAnillos" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner" style={{ height: '850px' }}>
                                {imagenesAnillos.map((imagen, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img className="img-fluid w-100 image" style={{ objectFit: "cover", height: '100%' }} src={imagen} alt={`Anillo ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselAnillos" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselAnillos" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-anillos-mobile">
                <div className="home-anillos-container text-center py-3">
                    {
                        infoAnillos.map(info => (
                            <>
                                <h2 className='title-categories-mobile'>{info.titulo}</h2>
                                <div className='d-flex justify-content-center mt-3'>
                                    <img className='home-anillos-home-imagen' src={anillo1} alt="" />
                                    <img className='home-anillos-home-imagen' src={anillo2} alt="" />
                                </div>
                                <p className='mt-4 descripcion-home-anillos'>{info.descripcion}</p>
                                <Link to={`/productos?categoria=Anillos`} className='btn-home-mobile'>Explora el amor y el compromiso</Link>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
