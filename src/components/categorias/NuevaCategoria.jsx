import React, { useState } from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import { Link } from 'react-router-dom'

export const NuevaCategoria = () => {
    const [nombre, setNombre] = useState('')

    const { agregarCategoria, categorias } = useCategorias()

    const change = e => {
        e.preventDefault()
        setNombre(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        agregarCategoria({
            nombre
        })
    }
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card w-100 py-3 px-3 shadow mb-2">
                        <div className="card-title">
                            <h3 className='text-secondary'>Agregar Categoria</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <input type="text" value={nombre} onChange={change} placeholder='Nombre de categoria' className="form-control" />
                                <input type="submit" value="Agregar Categoria" className="btn my-2 btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card w-100 py-3 px-3 shadow mb-2">
                        <div className="card-title">
                            <h3 className='text-secondary'>Agregar Sub-Categoria</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <input type="text" value={nombre} onChange={change} placeholder='Nombre de la sub-categoria' className="form-control mb-3" />
                                <select className="form-control">
                                    <option value="">Seleccione la categoria perteneciente</option>
                                    {
                                        categorias.map(categoria =>(
                                            <option value="" key={categoria.id}>{categoria.nombre}</option>
                                        ))
                                    }
                                </select>
                                <input type="submit" value="Agregar Sub-Categoria" className="btn my-2 btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
