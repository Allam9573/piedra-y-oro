import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";
import imagen from '../../assets/img/empty-cart.png'
import classNames from 'classnames';
import '../../assets/css/styles.css'
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from '../../hooks/useCart';

export const Cart = ({ cart, eliminarItemCarrito, incrementar, decrementar }) => {

    document.title = 'Lionettas | Mi Carrito'

    const [cliente, setCliente] = useState('')
    const [selectLugar, setSelectLugar] = useState('Tegucigalpa')
    const [valorEnvio, setValorEnvio] = useState(0)
    const { pathname } = useLocation();
    const { vaciarCarrito } = useCart();

    const handlePay = () => {
        const telefono = '+50494969595'
        const mensaje = cart.map(
            (producto) =>
                `Producto: ${producto.nombre}\nCodigo Producto: ${producto.codigo_producto}\nCantidad: ${producto.cantidad}\nLugar compra: ${selectLugar}\n\n`
        )
            .join('')
        const mensajeCompleto = `Hola, mi nombre es ${cliente}, me interesa realizar el siguiente pedido:\n\n ${mensaje}Valor de envio: ${new Intl.NumberFormat('es-HN', {
            style: 'currency',
            currency: 'HNL',
            minimumFractionDigits: 2,
        }).format(valorEnvio)}\n\nTotal a Pagar: ${new Intl.NumberFormat('es-HN', {
            style: 'currency',
            currency: 'HNL',
            minimumFractionDigits: 2,
        }).format(cartTotal())}`
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
            mensajeCompleto
        )}`;
        window.open(url, "_blank");
        vaciarCarrito()
    }

    const cartTotal = () => cart.reduce((total, item) => total + (item.precio * item.cantidad + valorEnvio), 0)
    const badgeClass = categoria => {
        return classNames('badge', {
            'bg-success': categoria === 'Ropa Deportiva',
            'bg-warning': categoria === 'Joyeria',
            'bg-danger': categoria === 'Maquillaje',
            'pink': categoria === 'Ropa Dama',
        }, 'bg-info')
    }
    const changeLugar = e => {
        setSelectLugar(e.target.value)
    }

    useEffect(() => {
        setValorEnvio(selectLugar === 'Tegucigalpa' ? 80 : 120)
        scrollTo(0, 0)
    }, [selectLugar, pathname])

    return (
        <>
            {
                (!cart || cart.length === 0) ?
                    <div className='text-center my-5'>
                        <h1 className='text-secondary'>Mi Cesta:</h1>
                        <img src={imagen} width={'30%'} alt="" />
                        <h3 className='text-secondary mb-3'>No hay productos en tu cesta.</h3>
                        <Link to={'/productos'} className='btn btn-outline-success rounded-pill'>Explorar Productos</Link>
                    </div> :
                    <div className="container py-5">
                        <h1 className='text-secondary mb-4 text-center'>Mi Cesta: <TiShoppingCart className='fs-1' /> </h1>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                {
                                    cart.map(producto => (
                                        <div key={producto.id} className="card shadow mb-3 p-3">
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <img className='me-3' style={{ width: '100px' }} src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : ''} alt="" />
                                                    <div className="d-flex flex-column">
                                                        <h3 className='text-secondary'>{producto.nombre}</h3>
                                                        <span style={{ width: '70%' }} className={badgeClass(producto.categoria_nombre)}>{producto.categoria_nombre}</span>
                                                    </div>
                                                </div>
                                                <MdOutlineDeleteOutline onClick={() => eliminarItemCarrito(producto.nombre)} className='text-danger fs-2' />
                                            </div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <h5 className='text-secondary'>Precio: <span>{new Intl.NumberFormat('es-HN', {
                                                    style: 'currency',
                                                    currency: 'HNL',
                                                    minimumFractionDigits: 2,
                                                }).format(producto.precio)}</span></h5>
                                                <div className='d-flex align-items-center'>
                                                    <h5 className='text-secondary me-2'>Cantidad:</h5>
                                                    <button onClick={() => decrementar(producto.id)} className='btn btn-danger'>-</button>
                                                    <input type="text" name="" value={producto.cantidad} className="form-control w-25" readOnly />
                                                    <button onClick={() => { incrementar(producto.id) }} className='btn btn-success'>+</button>
                                                </div>
                                                <h5>Total: {new Intl.NumberFormat('es-HN', {
                                                    style: 'currency',
                                                    currency: 'HNL',
                                                    minimumFractionDigits: 2,
                                                }).format(`${producto.precio * producto.cantidad}`)}</h5>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card shadow p-3">
                                    <h2 className='mb-3'>Informacion de compra</h2>
                                    <h5 className='text-secondary mb-3'>Subtotal: <span>{new Intl.NumberFormat('es-HN', {
                                        style: 'currency',
                                        currency: 'HNL',
                                        minimumFractionDigits: 2,
                                    }).format(cartTotal())}</span></h5>
                                    <h5 className='text-secondary mb-3'>Descuento: <span>{'Lps. 0.00'}</span></h5>
                                    <label className='mb-2' htmlFor="">Selecciona el lugar de donde compras
                                        <select className='form-control' value={selectLugar} onChange={e => changeLugar(e)}>
                                            <option value="Tegucigalpa">Tegucigalpa (Lps. 80.00)</option>
                                            <option value="Interior del pais">Interior del pais (Lps. 120.00)</option>
                                        </select>
                                    </label>
                                    <span>Valor del envio: L. {valorEnvio} </span>
                                    <hr />
                                    <h3 className='mb-3'>Total: <span>{new Intl.NumberFormat('es-HN', {
                                        style: 'currency',
                                        currency: 'HNL',
                                        minimumFractionDigits: 2,
                                    }).format(cartTotal())}</span></h3>
                                    <h5>Ingrese un nombre para identificación:</h5>
                                    <input
                                        type="text"
                                        placeholder='Tu nombre aqui...'
                                        className="form-control mb-3"
                                        value={cliente}
                                        onChange={e => setCliente(e.target.value)}
                                    />
                                    <button disabled={cliente.length === 0} onClick={() => handlePay()} style={{backgroundColor: '#938E87'}} className='btn btn-shadow text-white w-100'>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}