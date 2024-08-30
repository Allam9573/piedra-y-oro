import React, { useState } from 'react'
import { NuevaCategoria } from './NuevaCategoria'
import { CategoriaItem } from './CategoriaItem'
import { Link } from 'react-router-dom'

export const TablaCategorias = () => {

    const [buscar, setBuscar] = useState('')
    const changeBuscar = e => setBuscar(e.target.value)

    return (
        <>
            <NuevaCategoria />
            <input type="text" placeholder='Buscar categoria...' className="form-control mb-2" onChange={changeBuscar} />
            <table class="table table-hover table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Nombre de Categoria</th>
                        <th scope="col">Productos</th>
                        <th scope="col">Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoriaItem buscar={buscar} />
                </tbody>
            </table>
            <Link className='btn btn-secondary me-2' to={'/admin/categorias/eliminadas'}>Ver Categorias Eliminadas</Link>
            <Link className='btn btn-outline-secondary' to={'/admin'}>Atras</Link>
        </>
    )
}
