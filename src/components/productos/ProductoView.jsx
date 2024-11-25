import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductos } from '../../hooks/useProductos'
import classNames from 'classnames';

export const ProductoView = ({ addToCart }) => {

    const { id } = useParams()
    const { verProducto, producto } = useProductos()

    useEffect(() => {
        verProducto(id)
    }, [])

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
                            <div class="card mb-3">
                                <img class="card-img img-fluid" src={producto.imagen} alt="Card image cap" id="product-detail" />
                            </div>
                            <div class="row">
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="prev">
                                        <i class="text-dark fas fa-chevron-left"></i>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </div>
                                <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                    <div class="carousel-inner product-links-wap" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_01.jpg" alt="Product Image 1" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_02.jpg" alt="Product Image 2" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_03.jpg" alt="Product Image 3" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_04.jpg" alt="Product Image 4" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_05.jpg" alt="Product Image 5" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_06.jpg" alt="Product Image 6" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_07.jpg" alt="Product Image 7" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_08.jpg" alt="Product Image 8" />
                                                    </a>
                                                </div>
                                                <div class="col-4">
                                                    <a href="#">
                                                        <img class="card-img img-fluid" src="assets/img/product_single_09.jpg" alt="Product Image 9" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1 align-self-center">
                                    <a href="#multi-item-example" role="button" data-bs-slide="next">
                                        <i class="text-dark fas fa-chevron-right"></i>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-7 mt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="h2">{producto.nombre}</h1>
                                    <p class="h3 py-2">Precio: Lps. {producto.precio}</p>
                                    <span className={badgeClass(producto.categoria_nombre)}>{producto.categoria_nombre}</span>

                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Existencia:</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>{producto.stock} unidades</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>{producto.descripcion}</p>
                                    <div class="row pb-3">
                                        <div class="col d-grid">
                                            <button type="submit" class="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                        </div>
                                        <div class="col d-grid">
                                            <button onClick={() => addToCart(producto)} class="btn btn-success btn-lg" name="submit" value="addtocard">Add To Cart</button>
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
