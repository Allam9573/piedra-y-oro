import React, { useEffect } from 'react'
import imagen from '../assets/img/favorites.png'
import { Link, useLocation } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { GrView } from 'react-icons/gr';
import { useFavorites } from '../hooks/useFavorites';

export const Favorites = ({ favorites, deleteItem, addToCart }) => {
    document.title = 'P & O | Lista de deseos'
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <h1 className="text-secondary text-center my-5">Lista de deseos:</h1>
            {
                favorites.length === 0 ? (
                    <div className="text-center my-5">
                        <img src={imagen} className="img-fluid mx-auto" style={{ maxWidth: '200px' }} alt="No hay productos" />
                        <h3 className="text-secondary mb-3">No hay productos en tu lista de deseos.</h3>
                        <Link to="/productos" className="btn btn-outline-success rounded-pill">Explorar Productos</Link>
                    </div>
                ) : (
                    <div className="container">
                        {/* <div className="col-12 col-lg-6 mx-auto">
                            <div className="alert alert-danger mx-3">
                                <h6 className='text-center'>Los productos que marques como favoritos, seran removidos automaticamente en un plazo de 3 dias</h6>
                            </div>
                        </div> */}
                        <div className="row">

                            {
                                favorites.map(producto => (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3">

                                        <div className="card shadow h-100">
                                            <img
                                                src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : ''}
                                                className="card-img-top mx-auto mt-3"
                                                alt={producto.nombre}
                                                style={{ maxWidth: '80%', height: 'auto' }}
                                            />
                                            <div className="card-body text-center">
                                                <h3 className="text-secondary fs-5">{producto.nombre}</h3>
                                                <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                                                    <button
                                                        onClick={() => addToCart(producto)}
                                                        className="btn btn-success"
                                                    >
                                                        <MdAddShoppingCart />
                                                        <span className="ms-2">Agregar al Carrito</span>
                                                    </button>
                                                    <Link to={`/productos/${producto.id}`} className="btn btn-outline-success">
                                                        <GrView />
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteItem(producto)}
                                                        className="btn btn-danger"
                                                    >
                                                        <MdDelete />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
