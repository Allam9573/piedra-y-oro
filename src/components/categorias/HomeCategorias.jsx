import React from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import joya from '../../assets/img/joyas.png'
import ninos from '../../assets/img/ninos.png'
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
            <div className="row">
         
                        <div className="col-12 text-center col-md-4 p-5 mt-3">
                            <a href="#"><img src={joya} className="w-75" /></a>
                            <h5 className="text-center mt-3 mb-3">Joyeria</h5>
                            <p className="text-center">
                                <Link className="btn btn-success">Ver Mas</Link>
                            </p>
                        </div>
                        <div className="col-12 text-center col-md-4 p-5 mt-3">
                            <a href="#"><img src={ninos} className="w-75 shadow-img" /></a>
                            <h5 className="text-center mt-3 mb-3">Ninos</h5>
                            <p className="text-center">
                                <Link className="btn btn-success">Ver Mas</Link>
                            </p>
                        </div>
            </div>
        </section>
    )
}
