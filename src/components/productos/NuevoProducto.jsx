import React, { useState } from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import { useProductos } from '../../hooks/useProductos'
import { Link } from 'react-router-dom'
import { useSubcategorias } from '../../hooks/useSubcategorias'

export const NuevoProducto = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(1)
    const [subCategoriaId, setSubCategoriaId] = useState('')

    // const { subcategorias } = useCategorias()
    const { agregarProducto } = useProductos()
    const { subcategorias } = useSubcategorias()

    const onSubmit = e => {
        e.preventDefault()
        const nuevoProducto = {
            nombre,
            precio: parseFloat(precio, 10),
            stock: parseInt(stock, 10),
            subcategoria: subCategoriaId
        }
        agregarProducto(nuevoProducto)
    }

    return (
        <>
            <div className="card mx-auto w-50 my-5 py-3 px-3 shadow ">
                <div className="card-title">
                    <h3 className='text-secondary'>Agregar Producto</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Nombre del producto' className="mb-3 form-control" />
                        <input type="text" value={precio} onChange={e => setPrecio(e.target.value)} placeholder='Precio' className="mb-3 form-control" />
                        <input type="text" value={stock} onChange={e => setStock(e.target.value)} placeholder='Stock' className="mb-3 form-control" />
                        <select value={subCategoriaId} onChange={e => setSubCategoriaId(Number(e.target.value))} className='form-control' id="">
                            <option value="">Selecciona una Subcategoria</option>
                            {
                                subcategorias.map(({ id, nombre }) => (
                                    <option value={id} key={id}>{nombre}</option>
                                ))
                            }
                        </select>
                        <input type="submit" value="Agregar Producto" className="btn my-2 btn-primary me-2" />
                        <Link to={'/admin/productos'} className='btn btn-outline-primary'>Atras</Link>
                    </form>

                </div>
            </div>
        </>
    )
}
