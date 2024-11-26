import React from 'react'
import { useProductos } from '../../hooks/useProductos'
import { Link } from 'react-router-dom'

export const ProductoItem = () => {
    const { productos } = useProductos()
    return (
        <>
            {
                productos.map(({ id, nombre, precio, stock, descripcion, subcategoria_nombre }) => (
                    <tr key={id}>
                        <th scope="row">{nombre}</th>
                        <td>{precio}</td>
                        <td>{stock}</td>
                        <td>{descripcion}</td>
                        <td>{subcategoria_nombre ? subcategoria_nombre : 'categoria no disponible'}</td>
                        <td>
                            <Link className='btn btn-success me-2'>Editar</Link>
                            <Link className='btn btn-danger'>Eliminar</Link>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}
