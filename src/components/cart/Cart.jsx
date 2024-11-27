import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";
import imagen from '../../assets/img/empty-cart.png'
import classNames from 'classnames';
import '../../assets/css/styles.css'

export const Cart = ({ cart, eliminarItemCarrito, incrementar, decrementar }) => {

    document.title = 'Lionettas | Mi Carrito'
    const [cantidad, setCantidad] = useState(0)
    const [cliente, setCliente] = useState('')

    const handlePay = () => {
        const telefono = '+50432675530'
        const mensaje = cart.map(
            (producto) =>
                `Producto: ${producto.nombre}\nCantidad: ${producto.cantidad}`
        )
            .join('\n\n')
        const mensajeCompleto = `Hola, mi nombre es ${cliente}, me interesa realizar el siguiente pedido:\n\n ${mensaje}`
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
            mensajeCompleto
        )}`;
        window.open(url, "_blank");
    }

    const changeCantidad = e => {
        setCantidad(e.target.value)
    }

    const cartTotal = () => cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)
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
                (!cart || cart.length === 0) ?
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
                                    cart.map(producto => (
                                        <div key={producto.id} className="card shadow mb-3 p-3">
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <img className='me-3' src={producto.imagen} width={'20%'} alt="" />
                                                    <div className="d-flex flex-column">
                                                        <h3 className='text-secondary'>{producto.nombre}</h3>
                                                        <span style={{ width: '70%' }} className={badgeClass(producto.categoria_nombre)}>{producto.categoria_nombre}</span>
                                                    </div>
                                                </div>
                                                <MdOutlineDeleteOutline onClick={() => eliminarItemCarrito(producto.nombre)} className='text-danger fs-2' />
                                            </div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <h5 className='text-secondary'>Precio: <span>{`Lps. ${producto.precio}`}</span></h5>
                                                <div className='d-flex align-items-center'>
                                                    <h5 className='text-secondary me-2'>Cantidad:</h5>
                                                    <button onClick={() => { incrementar(producto.id) }} className='btn btn-success'>+</button>
                                                    <input type="text" name="" value={producto.cantidad} id="" className="form-control w-25" />
                                                    <button className='btn btn-danger'>-</button>
                                                </div>
                                                <h5>Total: Lps. 324</h5>
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
                                    <h3 className='mb-3'>Total: Lps. <span>{cartTotal()}</span></h3>
                                    <h5>Ingrese un nombre para indentificacion:</h5>
                                    <input
                                        type="text"
                                        placeholder='Tu nombre aqui...'
                                        className="form-control mb-3"
                                        value={cliente}
                                        onChange={e => setCliente(e.target.value)}
                                    />

                                    <button onClick={() => handlePay()} className='btn btn-danger'>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
