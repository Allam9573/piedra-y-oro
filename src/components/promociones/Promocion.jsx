import React, { useEffect, useState } from 'react'
import { GrView } from 'react-icons/gr'
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md'
import { Link, useLocation, useParams } from 'react-router-dom'
import { usePromociones } from '../../hooks/usePromociones'

export const Promocion = () => {
    const { id } = useParams()
    const [busqueda, setBusqueda] = useState('')
    const { promocion, buscarPromocion } = usePromociones()
    useEffect(() => {
        buscarPromocion(id)
    }, [])
    const { pathname } = useLocation()

    useEffect(() => {
        scrollTo(0, 0)
    }, [pathname])
    return (
        <div className="container py-5">
            {
                promocion != null ?
                    <>
                        <h2 className='text-coffee text-center title mb-5'>{promocion.titulo}</h2>
                        {/* <div className="row mb-4"> 
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-6 pb-4">
                                        <input
                                            type="search"
                                            placeholder="Buscar un producto..."
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            {/*
                        row-cols-1: 1 column on extra small screens
                        row-cols-sm-2: 2 columns on small screens
                        row-cols-md-3: 3 columns on medium screens
                        row-cols-lg-4: 4 columns on large screens
                        You can adjust these breakpoints and number of columns as needed.
                    */}
                            {
                                promocion.productos.length > 0 ?
                                    <>
                                        {
                                            promocion.productos.map(producto => (
                                                <div className="col mb-4" key={producto.id}> {/* Each card will take up one column */}
                                                    <div className="card product-wap rounded-0 h-100"> {/* Added h-100 to make cards the same height */}
                                                        <div className="card rounded-0">
                                                            <img
                                                                className="card-img rounded-0 img-fluid"
                                                                style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                                                src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : "placeholder.jpg"}
                                                                alt={producto.nombre}
                                                            />
                                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <button style={{ backgroundColor: '#938E87' }} onClick={() => addFavorite(producto)} className="btn text-white">
                                                                            <MdFavoriteBorder />
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <Link style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2" to={`/productos/${producto.id}`}>
                                                                            <GrView />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <button onClick={() => addToCart(producto)} style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2">
                                                                            <MdAddShoppingCart />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between align-items-center'> {/* Aligned items vertically */}
                                                                <h3 className="text-decoration-none">{producto.nombre}</h3>
                                                                <h6><span className="badge bg-danger p-2">🔥 - {producto.campana_descuento}%</span></h6>
                                                            </div>
                                                            <span style={{ backgroundColor: '#938E87' }} className='badge'>{producto.subcategoria_nombre}</span>
                                                            <p className="text-center mb-0">
                                                                Precio Normal: <span className="text-decoration-line-through text-secondary"> {new Intl.NumberFormat('es-HN', {
                                                                    style: 'currency',
                                                                    currency: 'HNL',
                                                                    minimumFractionDigits: 2,
                                                                }).format(producto.precio)}</span>
                                                            </p>
                                                            <p className="text-center mb-0">
                                                                Precio Oferta: <span className="fw-bold"> {new Intl.NumberFormat('es-HN', {
                                                                    style: 'currency',
                                                                    currency: 'HNL',
                                                                    minimumFractionDigits: 2,
                                                                }).format(producto.precio - (producto.precio * (producto.campana_descuento) / 100))}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </> :
                                    <></>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className='text-center mt-5'>
                            <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <h3 className='mt-3 text-secondary'>Cargando productos...</h3>
                            <p class="placeholder-glow">
                                <span class="placeholder col-12"></span>
                            </p>

                            <p class="placeholder-wave">
                                <span class="placeholder col-12"></span>
                            </p>
                        </div>
                    </>
            }
        </div>
    )
}
