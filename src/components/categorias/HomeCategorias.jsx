import React from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import joya from '../../assets/img/joyas.png'
import ninos from '../../assets/img/ninos.png'
import cruz from '../../assets/img/cruz.png'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'
import anillo from '../../assets/img/anillo.jpeg'
import pulsera from '../../assets/img/pulsera1.jpeg'
import modelo1 from '../../assets/img/modelo1.jpg'
import modelo2 from '../../assets/img/modelo2.jpg'

export const HomeCategorias = () => {
    return (
        <section className="container py-5">
            <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1" style={{ color: '#343A36' }}>Comprar por Categorias</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* Joyeria */}
                    <div className="col-3 col-md-3 text-center p-3">
                        <div className='position-relative h-100 w-100'>
                            <img src={modelo1} className='img-fluid' alt="" />
                            <Link to={`/productos?categoria=Pulseras`} style={{ backgroundColor: '#E7D7C9' }} className='btn position-absolute top-50 start-50 translate-middle'>Pulseras</Link>
                        </div>
                    </div>

                    {/* Niños */}
                    <div className="col-3 col-md-3 text-center p-3">
                        <div className='position-relative h-100 w-100'>
                            <img src={modelo2} className='img-fluid' alt="" />
                            <Link to={`/productos?categoria=Aretes`} style={{ backgroundColor: '#E7D7C9' }} className='btn position-absolute top-50 start-50 translate-middle'>Aretes</Link>
                        </div>
                    </div>

                    {/* Religión */}
                    <div className="col-3 col-md-3 text-center p-3">
                        <div className='position-relative h-100 w-100 bg-primary'>
                            <img src={anillo} className='img-fluid' alt="" />
                            <Link to={`/productos?categoria=Cadenas`} style={{ backgroundColor: '#E7D7C9' }} className='btn position-absolute top-50 start-50 translate-middle'>Cadenas</Link>
                        </div>
                    </div>
                    <div className="col-3 col-md-3 text-center p-3">
                        <div className='position-relative h-100 w-100 bg-primary'>
                            <img src={anillo} className='img-fluid' alt="" />
                            <Link to={`/productos?categoria=Anillos`} style={{ backgroundColor: '#E7D7C9' }} className='btn position-absolute top-50 start-50 translate-middle'>Anillos</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
