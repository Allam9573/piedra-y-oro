import React, { useEffect, useRef, useState } from 'react'
import { useCategorias } from '../../hooks/useCategorias'
// import joya from '../../assets/img/joyas.png'
// import ninos from '../../assets/img/ninos.png'
// import cruz from '../../assets/img/cruz.png'
import { Link } from 'react-router-dom'
import '../../assets/css/styles.css'
import anillo from '../../assets/img/anillo.jpeg'
import pulsera from '../../assets/img/pulsera1.jpeg'
import modelo1 from '../../assets/img/modelo1.jpg'
import modelo2 from '../../assets/img/modelo2.jpg'
import anillo1 from '../../assets/img/categorias/anillo1.jpg'
import anillo2 from '../../assets/img/categorias/anillo2.jpg'
import cadena1 from '../../assets/img/categorias/cadena1.jpg'
import cadena2 from '../../assets/img/categorias/cadena2.jpg'
import arete1 from '../../assets/img/categorias/arete1.jpg'
import arete2 from '../../assets/img/categorias/arete2.jpg'
import pulsera1 from '../../assets/img/categorias/pulsera1.jpg'
import pulsera2 from '../../assets/img/categorias/pulsera2.jpg'
import '../../assets/js/register'
import arito from '../../assets/img/arito.jpg'
import logo from '../../assets/img/logo_lionettas.png'
import { useRegistroClientes } from '../../hooks/useRegistroClientes'
import '../../assets/js/bootstrap.bundle.min.js';
import '../../assets/css/bootstrap.min.css';

export const HomeCategorias = () => {
    const [hovered, setHovered] = useState({});
    const targetRef = useRef(null);
    const modalRef = useRef(null);
    const [modal, setModal] = useState(null);
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')

    const { addCliente } = useRegistroClientes()

    // useEffect(() => {
    //     if (modalRef.current && window.bootstrap) {
    //         setModal(new window.bootstrap.Modal(modalRef.current));
    //     }
    // }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(

            ([entry]) => {
                console.log(entry.isIntersecting);
                if (entry.isIntersecting && modal) {
                    modal.show();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [modal]);
    const categories = [
        {
            name: "Pulseras",
            image1: pulsera1,
            image2: pulsera2
        },
        {
            name: "Aretes",
            image1: arete1,
            image2: arete2
        },
        {
            name: "Cadenas",
            image1: cadena1,
            image2: cadena2
        },
        {
            name: "Anillos",
            image1: anillo1,
            image2: anillo2
        },
    ];
    const SubmitCliente = e => {
        e.preventDefault()
        const nuevoCliente = {
            nombre_cliente: nombre,
            numero_telefonico: telefono
        }
        addCliente(nuevoCliente)
        setNombre('')
        setTelefono('')
    }
    return (
        <div ref={targetRef} className="px-0 mx-0 mb-5 w-100 text-center" id=''>
            <h2 className="title-categories">Comprar por categoría</h2>
            <div className="desktop-only">
                <div className="row category-container mx-auto">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="col-12 p-0 col-md-6 col-lg-3 position-relative category-card"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            style={{ height: '400px' }}
                        >
                            <img
                                src={hovered === index ? category.image2 : category.image1}
                                alt={category.name}
                                className=""
                                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                            />
                            <div className="position-absolute top-50 start-50 translate-middle px-4 py-2 fw-bold category-button">
                                <Link to={`/productos?categoria=${category.name}`} className='btn-outline-call'> {category.name}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mobile-only" style={{ height: 'auto' }}>
                <div id="categoriasCarousel" className="carousel container-carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" style={{ padding: '20px 0' }}>
                        {categories.map((category, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ padding: '0 10px' }}>
                                <div className="position-relative category-card" >
                                    <img
                                        src={category.image1}
                                        alt={category.name}
                                        className="d-block w-100 object-fit-contain"
                                        style={{ width: '200px', height: '150px', margin: '0 auto' }}
                                    />
                                    <div className="position-absolute top-50 start-50 translate-middle px-4 py-2 fw-bold category-button">
                                        <Link to={`/productos?categoria=${category.name}`} className="btn-outline-call">
                                            {category.name}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}


<div className="mobile-only-carousel">
    <div className="category-carousel-container">
        {categories.map((category, index) => (
            <div key={index} className="category-carousel-item">
                <img
                    src={category.image1} 
                    alt={category.name}
                    style={{ objectFit: 'cover', height: '200px', width: '100%' }} 
                />
                <div className="text-center py-2 fw-bold">
                    <Link to={`/productos?categoria=${category.name}`} className='btn-outline-call'> {category.name}</Link>
                </div>
            </div>
        ))}
    </div>
</div>























            {/* <div className="card bg-danger w-25">
                <img src={pulsera1} alt="" />
            </div> */}
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title">Unete a nuestra comunidad!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body">
                            <img src={logo} width={'15%'} className='mb-3' alt="" />
                            <p className='title-modal'>¡10% de descuento en tu primera compra!</p>
                            <p className='text-secondary mx-3'>¡Únete a nuestra comunidad y se el primero en enterarte de ofertas, exclusivas y promociones especiales!</p>
                            <form onSubmit={SubmitCliente}>
                                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Nombre' className="form-control mb-3" />
                                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder='Telefono' className="form-control mb-3" />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        No, gracias
                                    </button>
                                    <button disabled={nombre.length === 0 || telefono.length === 0} type="submit" style={{ backgroundColor: '#938E87' }} className="btn text-white">
                                        Unirme!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}