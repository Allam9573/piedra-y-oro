import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCategorias } from '../../hooks/useCategorias'

export const CategoriaProducto = () => {

    const { categoria, buscarCategoriaPorNombre } = useCategorias()

    const { nombre } = useParams()

    useEffect(() => {
        buscarCategoriaPorNombre(nombre)
    }, [])

    return (
        <div className="container">
            <h1 className='text-secondary my-5'>Categoria {categoria.nombre}</h1>
            <div className="row my-5">
                {
                    !categoria ?
                        <>Cargando</> :
                        <>
                            {
                                categoria.productos.map(({ idProducto, nombre }) => (
                                    <div key={idProducto} className="card p-5 m-2 shadow col-md-4">
                                        <img src={imagen} alt="" />
                                        {nombre}
                                        <Link className='btn btn-success'>Ver Producto</Link>
                                    </div>
                                ))
                            }
                        </>
                }
            </div>
        </div>
    )
}
