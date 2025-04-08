import React from 'react'
import anillo1 from '../../assets/img/image1.png'
import anillo2 from '../../assets/img/modelo1.jpg'
import anillo3 from '../../assets/img/image1.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
import { useHomeInfo } from '../../hooks/useHomeInfo'
import '../../assets/css/HomeAnillos.css'

export const HomeAnillos = () => {

    const { infoAnillos } = useHomeInfo();
    const infoData = infoAnillos[0]
    const imagenesAnillos = [anillo1, anillo2];
    return (
        <>
            {/* vista pc */}
            <div className='home-anillos-pc'>
                <div className='container-div'>
                    <div className='con-elements'>
                        <div className='con-left'>
                            <h2 className='title-info-anillos'>
                                {
                                    infoData == null ? 'Cargando titulo...' : infoData.titulo
                                }
                            </h2>
                            <p className='descripcion'>
                                {
                                    infoData == null ? 'Cargando descripcion...' : infoData.descripcion
                                }
                            </p>
                            <Link>Explora el amor y el compromiso</Link>
                        </div>
                        <div className='con-right'>
                            <div id="carouselAnillos" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={anillo1} className="d-block w-100 img-anillo" alt="Anillo 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={anillo2} className="d-block w-100 img-anillo" alt="Anillo 2" />
                                    </div>
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
            </div>

            {/* vista mobile */}
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
