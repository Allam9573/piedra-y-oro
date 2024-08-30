import React from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
//css import
import '../assets/css/bootstrap.min.css'
import '../assets/css/templatemo.css'

// javascript import
import '../assets/js/bootstrap.bundle.min.js'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container d-flex justify-content-between align-items-center">

                <Link class="navbar-brand text-success logo h1 align-self-center" to={'/'} >
                    Lionettas
                </Link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                    id="templatemo_main_nav">
                    <div class="flex-fill">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to={'/'} >Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/productos'}>Productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/nosotros'}>Nosotros</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contacto</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/admin'}>Admin</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar align-self-center d-flex">
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
                        <a class="nav-icon position-relative text-decoration-none" href="#">
                            <MdAddShoppingCart />
                            <span
                                class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                        </a>
                        <a class="nav-icon position-relative text-decoration-none" href="#">
                            <IoBagCheckOutline />
                            <span
                                class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                        </a>
                        {/* <a class="nav-icon position-relative text-decoration-none" href="#">
                    <i class="fa fa-fw fa-user text-dark mr-3"></i>
                    <span
                        class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                </a> */}
                    </div>
                </div>

            </div>
        </nav>
    )
}
