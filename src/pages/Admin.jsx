import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../assets/img/categories.png'
import products from '../assets/img/product.png'

export const Admin = () => {

    return (
        <div className="container my-5">
            <h1 className='text-secondary'>Panel de Administracion</h1>
            <div className="w-100 mx-auto">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="card shadow p-5 text-center w-25 m-4">
                        <img src={categories} width={'50%'} className='mx-auto mb-3' alt="" />
                        <h3 className='text-secondary'>Categorias</h3>
                        <Link to={'/admin/categorias'} className='btn btn-primary rounded-pill'>Ver Mas</Link>
                    </div>
                    <div className="card shadow p-5 text-center w-25 m-4">
                        <img src={products} width={'50%'} className='mx-auto mb-3' alt="" />
                        <h3 className='text-secondary'>Productos</h3>
                        <Link to={'/admin/productos'} className='btn btn-primary rounded-pill'>Ver Mas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
