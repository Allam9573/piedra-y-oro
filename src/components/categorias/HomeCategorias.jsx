import React, { useState } from 'react'
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

export const HomeCategorias = () => {
    const [hovered, setHovered] = useState({});
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
        <div className="container text-center py-5">
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
        </div>
    )
}
