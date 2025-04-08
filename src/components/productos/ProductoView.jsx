import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductos } from '../../hooks/useProductos'
import classNames from 'classnames';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import '../../assets/css/carousel-productos.css'


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
            <section className="bg-light">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card shadow mb-3">
                                <img
                                    className="card-img img-fluid"
                                    src={firstImage}
                                    alt="Product"
                                    id="product-detail"
                                />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-auto pe-2">
                                    <a
                                        href="#multi-item-example"
                                        role="button"
                                        data-bs-slide="prev"
                                        className="text-dark"
                                    >
                                        {/* <FaChevronLeft size={20} /> */}
                                    </a>
                                </div>

                                <div
                                    id="multi-item-example"
                                    className="col-12 overflow-hidden carousel slide carousel-multi-item"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner product-links-wap" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="row gx-3 gy-2"> {/* Ajuste de espacio entre miniaturas */}
                                                {producto.imagenes ? (
                                                    producto.imagenes.map((imagen, index) => (
                                                        <div className="col-3 col-md-2" key={index}> {/* Espaciado ajustado */}
                                                            <a href="#" className="d-block">
                                                                <img
                                                                    style={{
                                                                        maxWidth: '100%',
                                                                        maxHeight: '80px',
                                                                        objectFit: 'contain',
                                                                        cursor: 'pointer',
                                                                        border: 'none',
                                                                    }}
                                                                    onClick={() => setFirstImage(imagen.imagen)}
                                                                    className="card-img img-fluid mx-1 mb-2"
                                                                    src={imagen.imagen}
                                                                    alt={`Product Image ${index + 1}`}
                                                                />
                                                            </a>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span>Producto sin imagen</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto ps-2">
                                    <a
                                        href="#multi-item-example"
                                        role="button"
                                        data-bs-slide="next"
                                        className="text-dark"
                                    >
                                        {/* <FaChevronRight size={20} /> */}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 mt-5">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h1 className="h2">{producto.nombre}</h1>
                                    <p className="h3 py-2">
                                        Precio:{' '}
                                        {new Intl.NumberFormat('es-HN', {
                                            style: 'currency',
                                            currency: 'HNL',
                                            minimumFractionDigits: 2,
                                        }).format(producto.precio)}
                                    </p>
                                    <span className={badgeClass(producto.categoria_nombre)}>
                                        {producto.categoria_nombre}
                                    </span>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Existencia:</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted">
                                                <strong>{producto.stock} unidades</strong>
                                            </p>
                                        </li>
                                    </ul>
                                    <h6>Descripcion:</h6>
                                    <p>{producto.descripcion}</p>
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Link
                                                style={{ backgroundColor: '#938E87' }}
                                                to={'/productos'}
                                                className="text-white btn btn-lg"
                                                name="submit"
                                                value="buy"
                                            >
                                                Atras
                                            </Link>
                                        </div>
                                        <div className="col d-grid">
                                            <button
                                                style={{ backgroundColor: '#938E87' }}
                                                onClick={() => addToCart(producto)}
                                                className="btn text-white btn-lg"
                                                name="submit"
                                                value="addtocart"
                                            >
                                                Agregar al Carrito
                                            </button>
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
