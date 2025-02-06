import React from 'react'
import medallon from '../../assets/img/image2.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
export const HomeMedallones = () => {
    const { medallones } = useHomeCategorias()
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center">
            <div className="row w-100 flex-column-reverse flex-lg-row">
                {/* Sección de Imagen */}
                <div className="col-12 col-lg-6 text-center">
                    <img 
                        className="img-fluid w-100 object-fit-cover"
                        src={medallon} 
                        alt="Medallón" 
                    />
                </div>

                {/* Sección de Texto */}
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center text-lg-start p-4 p-lg-5">
                    {medallones.map((medallon) => (
                        <div key={medallon.id} className="mb-4">
                            <h2 className="title" style={{ color: '#E7D7C9' }}>{medallon.titulo}</h2>
                            <h3 style={{ color: '#C7D0CF' }} className="mx-5 text-start">{medallon.descripcion}</h3>
                        </div>
                    ))}
                    
                    {/* Botón de Comprar Ahora */}
                    <Link 
                        to="/productos?categoria=Medallones"
                        style={{ backgroundColor: '#E7D7C9' }}
                        className="btn p-4 fs-4 btn-lg"
                    >
                        Comprar Ahora
                    </Link>
                </div>
            </div>
        </div>
    )
}
