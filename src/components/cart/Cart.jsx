import React, { useState } from 'react'
import { useProductos } from '../../hooks/useProductos'
import { Link } from 'react-router-dom'
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import imagen from '../../assets/img/empty-cart.png'
import classNames from 'classnames';
import '../../assets/css/styles.css'

export const Cart = () => {

    const cart = JSON.parse(localStorage.getItem('cart'))
    const [cantidad, setCantidad] = useState(0)
    const badgeClass = categoria => {
        return classNames('badge', {
            'bg-success': categoria === 'Ropa Deportiva',
            'bg-warning': categoria === 'Joyeria',
            'bg-danger': categoria === 'Maquillaje',
            'pink': categoria === 'Ropa Dama',
        }, 'bg-info')
    }
    console.log(cart)
    return (
        <>
            {
                !cart ?
                    <div className='text-center my-5'>
                        <h1 className='text-secondary'>Mi Cesta:</h1>
                        <img src={imagen} width={'30%'} alt="" />
                        <h3 className='text-secondary mb-3'>No hay productos en tu cesta.</h3>
                        <Link to={'/productos'} className='btn btn-success rounded-pill'>Explorar Productos</Link>
                    </div> :
                    <div className="container py-5">
                        <h1 className='text-secondary mb-4'>Mi Cesta:</h1>
                        <div className="row">
                            <div className="col-8">
                                {
                                    cart.map(({ id, nombre, precio, imagen, categoria_nombre }) => (
                                        <div key={id} className="card shadow mb-3 p-3">
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <img className='me-3' src={imagen} width={'20%'} alt="" />
                                                    <div className="d-flex flex-column">
                                                        <h3 className='text-secondary'>{nombre}</h3>
                                                        <span style={{ width: '70%' }} className={badgeClass(categoria_nombre)}>{categoria_nombre}</span>
                                                    </div>
                                                </div>
                                                <MdOutlineDeleteOutline className='text-danger fs-2' />
                                            </div>
                                            <hr />
                                            <div className='d-flex'>
                                                <h5 className='text-secondary'>Precio: <span>{`Lps. ${precio}`}</span></h5>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-4">
                                <div className="card shadow p-3">
                                    <h2 className='mb-3'>Informacion de compra</h2>
                                    <h5 className='text-secondary mb-3'>Subtotal: <span>{'Lps. 999.99'}</span></h5>
                                    <h5 className='text-secondary'>Descuento: <span>{'Lps. 0.00'}</span></h5>
                                    <hr />
                                    <h3 className='mb-3'>Total: <span>{'Lps. 999.99'}</span></h3>
                                    <button className='btn btn-danger'>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
