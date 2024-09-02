import React from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import joya from '../../assets/img/joyas.png'
import { Link } from 'react-router-dom'

export const HomeCategorias = () => {
    const { categorias } = useCategorias()
    console.log(categorias)
    return (
        <section class="container py-5">
            <div class="row text-center pt-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Categorias</h1>
                    {/* <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p> */}
                </div>
            </div>
            <div class="row">
                {
                    categorias.map(({ idCategoria, nombre }) => (
                        <div key={idCategoria} class="col-12 col-md-4 p-5 mt-3">
                            <a href="#"><img src={joya} class="w-100" /></a>
                            <h5 class="text-center mt-3 mb-3">{nombre}</h5>
                            <p class="text-center">
                                <Link to={`/categorias/${nombre}`} class="btn btn-success">Ver Mas</Link>
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
