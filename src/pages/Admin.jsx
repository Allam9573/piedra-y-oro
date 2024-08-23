import React from 'react'
import { TablaCategorias } from '../components/categorias/TablaCategorias'
import { TablaProductos } from '../components/productos/TablaProductos'

export const Admin = () => {
    return (
        <div className="container my-5">
            <h1 className='text-secondary'>Panel de Administracion</h1>
            <div className="card shadow mt-5 p-5">
                <div className="card p-5 mb-5 shadow">
                    <TablaCategorias />
                </div>
                <div className="card p-5 shadow">
                    <TablaProductos />
                </div>
            </div>
        </div>
    )
}
