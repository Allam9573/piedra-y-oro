import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductos } from '../../hooks/useProductos'
import classNames from 'classnames';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


export const ProductoView = ({ addToCart }) => {


    const { id } = useParams()
    const { verProducto, producto } = useProductos()
    // const primeraImagen = producto.imagenes.length > 0 ? producto.imagenes[0] : ''
    console.log(producto)
    const [firstImage, setFirstImage] = useState('')


    useEffect(() => {
        verProducto(id)
    }, [])

    useEffect(() => {
        if (producto && producto.imagenes && producto.imagenes.length > 0) {
            setFirstImage(producto.imagenes[0].imagen); // Establece la primera imagen al cargar el producto
        }
    }, [producto]);

    const badgeClass = categoria => {
        return classNames('badge', {
            'bg-success': categoria === 'Ropa Deportiva',
            'bg-warning': categoria === 'Joyeria',
            'bg-danger': categoria === 'Maquillaje',
        }, 'bg-info')
    }
    return (
        <>

            <section class="bg-light">
                <div class="container pb-5">
                    <div class="row">
                        <div class="col-lg-5 mt-5">
                            <div class="card shadow mb-3">
                                <img class="card-img img-fluid" src={firstImage} alt="Card image cap" id="product-detail" />
                            </div>
                            <div class="row">
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <FaChevronLeft />
                                        {/* <span class="sr-only">Anterior</span> */}
                                    </a>
                                </div>
                                <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                    <div class="carousel-inner product-links-wap" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div className="col-4">
                                                    <a href="#" className='d-flex'>
                                                        {
                                                            producto.imagenes ?
                                                                <>
                                                                    {
                                                                        producto.imagenes.map(imagen => {
                                                                            return (
                                                                                <img
                                                                                    style={{ maxHeight: '100%' }}
                                                                                    onClick={() => setFirstImage(imagen.imagen)}
                                                                                    key={imagen} class="card-img img-fluid mx-2"
                                                                                    src={imagen.imagen} alt="Product Image 1" />
                                                                            )
                                                                        })
                                                                    }
                                                                </> :
                                                                <>
                                                                    fe
                                                                </>
                                                        }
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                                        <FaChevronRight />
                                        {/* <span class="sr-only">Siguente</span> */}
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-7 mt-5">
                            <div class="card shadow">
                                <div class="card-body">
                                    <h1 class="h2">{producto.nombre}</h1>
                                    <p class="h3 py-2">Precio: {new Intl.NumberFormat('es-HN', {
                                        style: 'currency',
                                        currency: 'HNL',
                                        minimumFractionDigits: 2,
                                    }).format(producto.precio)}</p>
                                    <span className={badgeClass(producto.categoria_nombre)}>{producto.categoria_nombre}</span>

                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Existencia:</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>{producto.stock} unidades</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Descripcion:</h6>
                                    <p>{producto.descripcion}</p>
                                    <div class="row pb-3">
                                        <div class="col d-grid">
                                            <Link to={'/productos'} class="btn btn-success btn-lg" name="submit" value="buy">Atras</Link>
                                        </div>
                                        <div class="col d-grid">
                                            <button onClick={() => addToCart(producto)} class="btn btn-success btn-lg" name="submit" value="addtocard">Agregar al Carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
