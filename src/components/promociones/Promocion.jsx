import React, { useEffect, useState } from 'react'
import { GrView } from 'react-icons/gr'
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { usePromociones } from '../../hooks/usePromociones'

export const Promocion = () => {
    const { id } = useParams()
    const [busqueda, setBusqueda] = useState('')
    const { promocion, buscarPromocion } = usePromociones()
    useEffect(() => {
        buscarPromocion(id)
    }, [])
    console.log(promocion);
    return (
        <div className="container py-5">

            {
                promocion != null ?
                    <>
                        <h2 className='text-center'>{promocion.titulo}</h2>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-md-6 pb-4">
                                        {/* <input
                                type="search"
                                placeholder="Buscar un producto..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                className="form-control"
                            /> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        {
                                            promocion.productos.length > 0 ?
                                                <>
                                                    {
                                                        promocion.productos.map(producto => (
                                                            <div className="card mb-4 product-wap rounded-0">
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
                                                                                <a style={{ backgroundColor: '#938E87' }} onClick={() => addFavorite(producto)} className="btn text-white">
                                                                                    <MdFavoriteBorder />
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <Link style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2" to={`/productos/${producto.id}`}>
                                                                                    <GrView />
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <a onClick={() => addToCart(producto)} style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2">
                                                                                    <MdAddShoppingCart />
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <h3 className="text-decoration-none">{producto.nombre}</h3>
                                                                    <span style={{ backgroundColor: '#938E87' }} className='badge'>{producto.subcategoria_nombre}</span>
                                                                    <p className="text-center mb-0">
                                                                        Precio: <span className="fw-bold"> {new Intl.NumberFormat('es-HN', {
                                                                            style: 'currency',
                                                                            currency: 'HNL',
                                                                            minimumFractionDigits: 2,
                                                                        }).format(producto.precio)}</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </> :
                                                <>  </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>Cargando</>
            }
        </div>
    )
}
