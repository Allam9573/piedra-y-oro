import React from 'react'
import anillosImage from '../../assets/img/image1.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'

export const HomeAnillos = () => {
    const { anillos } = useHomeCategorias()
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center">
        <div className="row w-100 flex-column-reverse flex-lg-row align-items-center">
            
            {/* Sección de Texto */}
            <div className="col-12 col-lg-6 text-center d-flex flex-column justify-content-center align-items-center">
                {anillos.map(anillo => (
                    <div key={anillo.id}>
                        <h2 className="title" style={{ color: "#E7D7C9" }}>{anillo.titulo}</h2>
                        <h3 style={{ color: '#C7D0CF' }} className="mx-5 text-start mb-5">{anillo.descripcion}</h3>
                    </div>
                ))}
                <Link to={`/productos?categoria=Anillos`} style={{ backgroundColor: '#E7D7C9' }} className="btn p-4 fs-4 btn-lg">
                    Comprar Ahora
                </Link>
            </div>
    
            {/* Sección de Imagen */}
            <div className="col-12 col-lg-6 text-center">
                <img className="img-fluid w-100 d-block d-lg-block" style={{ maxHeight: "500px", objectFit: "cover" }} src={anillosImage} alt="Anillo" />
            </div>
    
        </div>
    </div>
    
    )
}
