import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCategorias } from '../../../hooks/useCategorias'

export const CategoriaEliminadaItem = () => {

    const { categoriasEliminadas, listarCategoriasEliminadas } = useCategorias()

    useEffect(() => {
        listarCategoriasEliminadas()
    }, [])

    return (
        <>
            {
                categoriasEliminadas.map(({ idCategoria, nombre }) => (
                    <tr key={idCategoria}>
                        <th scope="row">{nombre}</th>
                        <td>
                            <Link to={`/admin/categorias/restaurar/${idCategoria}`} className='btn btn-success'>Restaurar</Link>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
