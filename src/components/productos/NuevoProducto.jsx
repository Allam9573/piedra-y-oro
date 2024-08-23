import React, { useState } from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import { useProductos } from '../../hooks/useProductos'

export const NuevoProducto = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(1)
    const [categoriaId, setCategoriaId] = useState('')

    const { categorias } = useCategorias()
    const { agregarProducto } = useProductos()

    const onSubmit = e => {
        e.preventDefault()
        agregarProducto({
            nombre,
            precio: parseInt(precio, 10),
            stock: parseInt(stock, 10),
            categoriaId
        })
    }
    return (
        <>
            <div className="card w-50 py-3 px-3 shadow mb-2">
                <div className="card-title">
                    <h3 className='text-secondary'>Agregar Producto</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Nombre del producto' className="mb-3 form-control" />
                        <input type="text" value={precio} onChange={e => setPrecio(e.target.value)} placeholder='Precio' className="mb-3 form-control" />
                        <input type="text" value={stock} onChange={e => setStock(e.target.value)} placeholder='Stock' className="mb-3 form-control" />
                        <select value={categoriaId} onChange={e => setCategoriaId(Number(e.target.value))} className='form-control' id="">
                            <option value="">Selecciona una categoria</option>
                            {
                                categorias.map(({ idCategoria, nombre }) => (
                                    <option value={idCategoria} key={idCategoria}>{nombre}</option>

                                ))
                            }
                        </select>
                        <input type="submit" value="Agregar Categoria" className="btn my-2 btn-primary" />
                    </form>
                </div>
            </div>
        </>
    )
}
