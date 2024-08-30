import React from 'react'
import { useProductos } from '../../hooks/useProductos'
import { Link } from 'react-router-dom'

export const ProductoItem = () => {

    const { productos } = useProductos()
    console.log(productos)
    return (
        <>
            {
                productos.map(({ idProducto, nombre, precio, stock, categoria }) => (
                    <tr key={idProducto}>
                        <th scope="row">{nombre}</th>
                        <td>{precio}</td>
                        <td>{stock}</td>
                        {/* <td>{categoria.nombre}</td> */}
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
