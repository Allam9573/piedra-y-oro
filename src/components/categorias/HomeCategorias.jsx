import React from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import joya from '../../assets/img/joyas.png'
import ninos from '../../assets/img/ninos.png'
import cruz from '../../assets/img/cruz.png'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'

export const HomeCategorias = () => {
    const { categorias } = useCategorias()
    return (
        <section className="container py-5">
            <div className="row text-center pt-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Categorias</h1>
                    {/* <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p> */}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* Joyeria */}
                    <div className="col-12 col-md-4 text-center p-3">
                        <a href="#">
                            <img src={joya} className="img-fluid w-75" alt="Joyeria" />
                        </a>
                        <h5 className="mt-3 mb-3">Joyeria</h5>
                        <p>
                            <Link to="/productos" className="btn btn-success">Ver Más</Link>
                        </p>
                    </div>

                    {/* Niños */}
                    <div className="col-12 col-md-4 text-center p-3">
                        <a href="#">
                            <img src={ninos} className="img-fluid w-75" alt="Niños" />
                        </a>
                        <h5 className="mt-3 mb-3">Niños</h5>
                        <p>
                            <Link to="/productos" className="btn btn-success">Ver Más</Link>
                        </p>
                    </div>

                    {/* Religión */}
                    <div className="col-12 col-md-4 text-center p-3">
                        <a href="#">
                            <img src={cruz} className="img-fluid w-75" alt="Religión" />
                        </a>
                        <h5 className="mt-3 mb-3">Religión</h5>
                        <p>
                            <Link to="/productos" className="btn btn-success">Ver Más</Link>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
