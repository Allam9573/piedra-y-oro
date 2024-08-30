import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCategorias } from '../../../hooks/useCategorias'

export const RestaurarCategoria = () => {

    const { id } = useParams()
    const { categoria, buscarCategoria, restaurarCategoria } = useCategorias()

    useEffect(() => {
        buscarCategoria(id)
    }, [])

    return (
        <>
            <div className="container">
                <div className="card shadow my-5 py-5 text-center">
                    <h6 className='display-6 text-secondary'>Esta seguro que desea restaurar la categoria "{categoria.nombre}"?</h6>
                    <div>
                        <Link to={'/admin/categorias/eliminadas'} className='btn btn-success rounded-pill me-2'>Cancelar</Link>
                        <Link onClick={() => restaurarCategoria(categoria.idCategoria)} className='btn btn-danger rounded-pill'>Restaurar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
