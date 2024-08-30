import React from 'react'
import { Link } from 'react-router-dom'
import { CategoriaEliminadaItem } from './CategoriaEliminadaItem'

export const TablaCategoriasEliminadas = () => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Categoria</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoriaEliminadaItem />
                </tbody>
            </table>
            <Link className='btn btn-success mb-3' to={'/admin/categorias'}>Ver Categorias Activas</Link>
        </>
    )
}
