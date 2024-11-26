import React, { useEffect, useState } from 'react'
import { useProductos } from '../hooks/useProductos'
import { MdFavoriteBorder } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useCategorias } from '../hooks/useCategorias';

export const ProductosPage = ({ cart, addToCart, addFavorite }) => {
    document.title='Lionettas | Productos'

    const [busqueda, setBusqueda] = useState('')

    const { productos } = useProductos()
    const { categorias } = useCategorias()


    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.trim().toLowerCase()))

    const changeBusqueda = e => setBusqueda(e.target.value)

    const badgeClass = categoria => {
        return classNames('badge', {
            'bg-success': categoria === 'Ropa Deportiva',
            'bg-warning': categoria === 'Joyeria',
            'bg-danger': categoria === 'Maquillaje',
        }, 'bg-info')
    }
    return (
        <>
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-3">
                        <h1 class="h2 pb-4">Categories</h1>
                        <ul class="list-unstyled templatemo-accordion">
                            {
                                categorias.map(({ id, nombre }) => (
                                    <li key={id} class="pb-3">
                                        <input type="checkbox" name="" id="" />
                                        <span className='ms-2'>{nombre}</span>
                                    </li>

                                ))
                            }
                        </ul>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="list-inline shop-top-menu pb-3 pt-1">
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="h3 text-dark text-decoration-none" href="#">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 pb-4">
                                <div class="d-flex">
                                    <input type="text" placeholder='Buscar un producto...' value={busqueda} onChange={changeBusqueda} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {
                                resultados.length !== 0 ?
                                    <>
                                        {
                                            resultados.map(producto => (
                                                <div key={producto.id} class="col-md-4">
                                                    <div class="card mb-4 product-wap rounded-0">
                                                        {
                                                            console.log(producto.imagenes[0].imagen)
                                                        }
                                                        <div class="card rounded-0">
                                                            <img class="card-img rounded-0 img-fluid" src={producto.imagenes} />
                                                            <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                                <ul class="list-unstyled">
                                                                    <li><a onClick={() => addFavorite(producto)} class="btn btn-success text-white" ><MdFavoriteBorder /></a></li>
                                                                    <li><Link class="btn btn-success text-white mt-2" to={`/productos/${producto.id}`}><GrView /></Link></li>
                                                                    <li><a onClick={() => addToCart(producto)} class="btn btn-success text-white mt-2"><MdAddShoppingCart /></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <a href="shop-single.html" class="h3 text-decoration-none">{producto.nombre}</a>
                                                            <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                                {

                                                                    <>
                                                                        <span className={badgeClass(producto.categoria_nombre)}>{producto.categoria_nombre}</span>
                                                                    </>
                                                                }
                                                                <li class="pt-2">
                                                                    <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                                    <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                                    <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                                    <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                                    <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                                                </li>
                                                            </ul>
                                                            <ul class="list-unstyled d-flex justify-content-center mb-1">
                                                                <li>
                                                                    <i class="text-warning fa fa-star"></i>
                                                                    <i class="text-warning fa fa-star"></i>
                                                                    <i class="text-warning fa fa-star"></i>
                                                                    <i class="text-muted fa fa-star"></i>
                                                                    <i class="text-muted fa fa-star"></i>
                                                                </li>
                                                            </ul>
                                                            <p class="text-center mb-0">Precio: <span className='fw-bold'>Lps. {producto.precio}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </> :
                                    <>
                                        <h2>Sin resultados</h2>
                                    </>
                            }
                        </div>
                        <div div="row">
                            <ul class="pagination pagination-lg justify-content-end">
                                <li class="page-item disabled">
                                    <a class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
