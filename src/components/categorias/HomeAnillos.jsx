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
                    <div className="con-anillos-left col-12 col-lg-6 px-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                        <h2 className="title" style={{ color: "#E7D7C9" }}>Anillos Exclusivos</h2>
                        <h3 className="mb-5 fs-5 fs-lg-3" style={{ color: "#C7D0CF" }}>
                            Descubre nuestra colección de anillos únicos y elegantes.
                        </h3>
                        <Link
                            to={`/productos?categoria=Anillos`}
                            style={{ backgroundColor: "#E7D7C9" }}
                            className="btn mb-5 mb-lg-3 p-2 p-lg-4 fs-4 btn-lg btn-shadow"
                        >
                            Comprar Ahora
                        </Link>
                    </div>
                    <div className="col-12 mx-0 px-0 col-lg-6">
                        <div id="carouselAnillos" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {imagenesAnillos.map((imagen, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img className="img-fluid w-100 image" style={{ objectFit: "cover", height: '800px' }} src={imagen} alt={`Anillo ${index + 1}`} />
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
                                <h2 className='title-home-anillos fs-5 text-white'>{info.titulo}</h2>
                                <div className='d-flex justify-content-center mt-3'>
                                    <img className='home-anillos-home-imagen' src={anillo1} alt="" />
                                    <img className='home-anillos-home-imagen' src={anillo2} alt="" />
                                </div>
                                <p className='text-white mt-4 descripcion-home-anillos'>{info.descripcion}</p>
                                <Link className='btn-home'>Explora el amor y el compromiso</Link>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
