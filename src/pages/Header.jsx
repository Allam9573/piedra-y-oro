import React from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import anillo from '../assets/img/anillo.jpeg'
import logo from '../assets/img/logo_verde.png'
import '../assets/css/styles.css'

export const Header = () => {

    const { promociones } = usePromociones();

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center">
        <div className="row w-100 flex-column-reverse flex-lg-row">
            
            {/* Sección de Promociones (Texto) - Primero en móviles, segundo en escritorio */}
            <div className="col-12 col-lg-6 text-start d-flex flex-column justify-content-center align-items-center px-4 px-lg-5 py-4" 
                style={{ backgroundColor: '#C7D0CF' }}>
                
                <img src={logo} className="mb-3 img-fluid w-50 w-md-25" alt="Logo" />
                
                {promociones.map((promocion) => (
                    <div key={promocion.id} className="text-start w-100">
                        <p className="title-promocion mt-4">{promocion.titulo}</p>
                        <p className="descripcion-promocion mb-4">{promocion.descripcion}</p>
                        <Link to="/productos" className="btn-call mt-3">Inspirate</Link>
                    </div>
                ))}
            </div>
    
            {/* Sección de Imagen - Segundo en móviles, primero en escritorio */}
            <div className="col-12 col-lg-6 text-center">
                <img className="img-fluid w-100 object-fit-cover" src={anillo} alt="Anillo" />
            </div>
    
        </div>
    </div>
    
    )
}
