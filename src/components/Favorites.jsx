import React from 'react'
import imagen from '../assets/img/favorites.png'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { GrView } from 'react-icons/gr';

export const Favorites = ({ favorites, deleteItem, addToCart }) => {
    document.title = 'Lioenttas | Lista de deseos'
    return (
        <>
            <h1 className='text-secondary text-center my-5'>Lista de deseos:</h1>
            {
                favorites.length === 0 ?
                    <div className='text-center my-5'>
                        <img src={imagen} width={'20%'} alt="" />
                        <h3 className='text-secondary mb-3'>No hay productos en tu lista de deseos.</h3>
                        <Link to={'/productos'} className='btn btn-success rounded-pill'>Explorar Productos</Link>
                    </div> :
                    <div className='container'>
                        <div className="d-flex justify-content-start flex-wrap">
                            {
                                favorites.map(producto => (
                                    <div className="card m-3 shadow w-25 h-25">
                                        <img style={{width:'30%'}} src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : ''} className='mx-auto m-2' alt="" />
                                        <div className='p-3' style={{ maxHeight: '15%' }}>
                                            <h3 className='text-center text-secondary'>{producto.nombre}</h3>
                                            <button onClick={() => addToCart(producto)} className='btn btn-success'>
                                                <MdAddShoppingCart />
                                                <span className='ms-2'>Agregar al Carrito</span>
                                            </button>
                                            <Link to={`/productos/${producto.id}`} className='ms-2 btn btn-outline-success'>
                                                <GrView />
                                            </Link>
                                            <button onClick={() => deleteItem(producto)} className='ms-2 btn btn-danger'>
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </>
    )
}
