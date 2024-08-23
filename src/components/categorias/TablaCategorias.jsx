import React, { useState } from 'react'
import { NuevaCategoria } from './NuevaCategoria'
import { CategoriaItem } from './CategoriaItem'

export const TablaCategorias = () => {

    const [buscar, setBuscar] = useState('')
    const changeBuscar = e => setBuscar(e.target.value)

    return (
        <>
            <NuevaCategoria />
            <input type="text" placeholder='Buscar categoria...' className="form-control mb-2" onChange={changeBuscar} />
            <table class="table">
                <thead className='table-success'>
                    <tr>
                        <th scope="col">Nombre de Categoria</th>
                        <th scope="col">Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <CategoriaItem buscar={buscar} />
                </tbody>
            </table>
        </>
    )
}
