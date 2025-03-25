import React, { useEffect, useState } from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from "react-icons/md";
import logo from '../assets/img/logo_lionettas.png'
import logo_blanco from '../assets/img/logo_blanco.png'

//css import
import '../assets/css/bootstrap.min.css'
import '../assets/css/templatemo.css'

// javascript import
import '../assets/js/bootstrap.bundle.min.js'

export const Navbar = ({ quantity, quantityFavorites }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className="navbar-desktop navbar fixed-top navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "#E7D7C9", width: "100%" }}>
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Contenedor para el logo y el botón hamburguesa */}
                    <div className="d-flex align-items-center">
                        {/* Logo alineado a la izquierda */}
                        <Link className="navbar-brand text-success logo h1" to={'/'}>
                            <img src={logo} className="img-fluid" width={'15%'} alt="Logo" />
                        </Link>

                        {/* Botón hamburguesa alineado a la derecha en móvil */}
                        <button className="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#templatemo_main_nav" aria-controls="templatemo_main_nav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* Contenido del menú */}
                    <div className="collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between align-items-center mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="link" to={'/'}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link" to={'/productos'}>Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link" to={'/nosotros'}>Nosotros</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <Link className="nav-icon position-relative text-decoration-none" to={'/my-cart'}>
                                <MdAddShoppingCart className='fs-3 link' />
                                {quantity > 0 ? (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantity}</span>
                                ) : (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill text-white"></span>
                                )}
                            </Link>
                            <Link className="nav-icon position-relative text-decoration-none" to={'/my-favorites'}>
                                <MdFavoriteBorder className='fs-3 link' />
                                {quantityFavorites > 0 ? (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantityFavorites}</span>
                                ) : (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill text-white"></span>
                                )}
                            </Link>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="navbar-mobile px-0 navbar fixed-top navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "#E7D7C9", width: "100%" }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="navbar-toggler border-0 ms-auto" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand text-success text-center logo h1" to={'/'}>
                            <img src={logo_blanco} className="img-fluid ms-4" style={{ maxWidth: '90%' }} alt="Logo" />
                        </Link>
                        <div className="mx-3 align-self-center flex-row d-flex">
                            <Link className="nav-icon position-relative text-decoration-none" to={'/my-cart'} onClick={closeMenu}>
                                <MdAddShoppingCart className='fs-3 link' />
                                {quantity > 0 && (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantity}</span>
                                )}
                            </Link>
                            <Link className="nav-icon position-relative text-decoration-none" to={'/my-favorites'} onClick={closeMenu}>
                                <MdFavoriteBorder className='fs-3 link' />
                                {quantityFavorites > 0 && (
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-danger text-white">{quantityFavorites}</span>
                                )}
                            </Link>
                            <a className="nav-icon position-relative text-decoration-none" href="#">
                                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                            </a>
                        </div>
                    </div>

                    <div className={`mobile-menu ${isOpen ? 'open' : ''} w-100 d-lg-none`} style={{ backgroundColor: "#E7D7C9", position: 'absolute', top: '100%', left: 0, zIndex: 1000 }}>
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex flex-column align-items-center mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="link py-2" to={'/'} onClick={closeMenu}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link py-2" to={'/productos'} onClick={closeMenu}>Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link py-2" to={'/nosotros'} onClick={closeMenu}>Nosotros</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Esta es la parte del menú de escritorio, que se mostrará en pantallas más grandes */}
                    <div className="collapse navbar-collapse flex-fill d-none d-lg-flex justify-content-lg-between"
                        id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between align-items-center mx-lg-auto">
                                <li className="nav-item">
                                    <Link className="link" to={'/'}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link" to={'/productos'}>Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="link" to={'/nosotros'}>Nosotros</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>


    )
}
