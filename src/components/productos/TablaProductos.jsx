import React from 'react'
import { NuevoProducto } from './NuevoProducto'
import { Link } from 'react-router-dom'
import { useProductos } from '../../hooks/useProductos'
import { ProductoItem } from './ProductoItem'

export const TablaProductos = () => {

    const { productos } = useProductos()

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Sub-Categoria</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductoItem />
                </tbody>
            </table>
            <Link className='btn btn-primary me-2' to={'/admin/productos/nuevo-producto'}>Agregar Nuevo Producto</Link>
            <Link className='btn btn-outline-primary' to={'/admin'}>Atras</Link>
        </>
    )
}
