import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCategorias } from '../../hooks/useCategorias'

export const EliminarCategoria = () => {

    const { id } = useParams()
    const { categoria, buscarCategoria, eliminarCategoria } = useCategorias()

    useEffect(() => {
        buscarCategoria(id)
    }, [])
    return (
        <div className="container">
            <div className="card shadow my-5 py-5 text-center">
                <h6 className='display-6 text-secondary'>Esta seguro que desea eliminar la categoria "{categoria.nombre}"?</h6>
                <div>
                    <Link to={'/admin/categorias'} className='btn btn-success rounded-pill me-2'>Cancelar</Link>
                    <Link onClick={() => eliminarCategoria(categoria.idCategoria)} className='btn btn-danger rounded-pill'>Eliminar</Link>
                </div>
            </div>
        </div>
    )
}
