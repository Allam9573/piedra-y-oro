import React, { useEffect, useRef, useState } from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import joya from '../../assets/img/joyas.png'
import ninos from '../../assets/img/ninos.png'
import cruz from '../../assets/img/cruz.png'
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
import logo from '../../assets/img/logo_lionettas.png'

export const HomeCategorias = () => {
    const [hovered, setHovered] = useState({});

    const targetRef = useRef(null);
    const modalRef = useRef(null);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        if (modalRef.current && window.bootstrap) {
          setModal(new window.bootstrap.Modal(modalRef.current));
        }
      }, []);
      

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && modal) {
                    modal.show();
                    observer.disconnect(); // Evita que se muestre varias veces
                }
            },
            { threshold: 1.0 }
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
    return (
        <div ref={targetRef} className="container text-center py-5" id=''>
            <h2 className="mb-4">Comprar por categoría</h2>
            <div className="row">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="col-12 col-md-6 col-lg-3 position-relative category-card"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img
                            src={hovered === index ? category.image2 : category.image1}
                            alt={category.name}
                            className="img-fluid rounded category-image"
                        />
                        <div className="position-absolute top-50 start-50 translate-middle px-4 py-2 fw-bold category-button">
                            <Link to={`/productos?categoria=${category.name}`} className='btn-outline-call'> {category.name}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title">Unete a nuestra comunidad!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body">
                            <img src={logo} width={'15%'} className='mb-3' alt="" />
                            <p className='text-secondary'>¡Únete ahora a nuestra comunidad para gozar de un 10% de descuento en tu primer compra!</p>
                            <form>
                                <input type="text" placeholder='Nombre' className="form-control mb-3" />
                                <input type="text" placeholder='Telefono' className="form-control mb-3" />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                        No, gracias
                                    </button>
                                    <button type="button" style={{backgroundColor: '#938E87'}} className="btn text-white">
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
