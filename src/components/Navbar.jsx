import React, { useEffect, useState } from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from "react-icons/md";
import logo from '../assets/img/logo_lionettas.png'

//css import
import '../assets/css/bootstrap.min.css'
import '../assets/css/templatemo.css'

// javascript import
import '../assets/js/bootstrap.bundle.min.js'

export const Navbar = ({ quantity, quantityFavorites }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "#E7D7C9", width: "100%" }}>
            <div className="container d-flex justify-content-center align-items-center">

                <Link className="navbar-brand text-success logo h1 align-self-center" to={'/'} >
                    <img src={logo} className="img-fluid" style={{ maxWidth: '15%' }} alt="Logo" />
                </Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                    id="templatemo_main_nav">
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'} >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/productos'}>Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/nosotros'}>Nosotros</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        {/* <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                    <div class="input-group">
                        <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                        <div class="input-group-text">
                            <i class="fa fa-fw fa-search"></i>
                        </div>
                    </div>
                </div> */}
                        {/* <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal"
                    data-bs-target="#templatemo_search">
                    <i class="fa fa-fw fa-search text-dark mr-2"></i>
                </a> */}
                        <Link className="nav-icon position-relative text-decoration-none" to={'/my-cart'}>
                            <MdAddShoppingCart className='fs-3' />
                            {
                                quantity > 0 ?
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantity}</span>
                                    :
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill text-white"></span>
                            }
                        </Link>
                        <Link className="nav-icon position-relative text-decoration-none" to={'/my-favorites'}>
                            <MdFavoriteBorder className='fs-3' />
                            {
                                quantityFavorites > 0 ?
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantityFavorites}</span>
                                    :
                                    <span
                                        className="position-absolute top-0 left-100 translate-middle badge rounded-pill text-white"></span>
                            }
                        </Link>
                        <a class="nav-icon position-relative text-decoration-none" href="#">
                            <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    )
}
