import React from 'react'
import medallon from '../../assets/img/image2.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'

export const HomeMedallones = () => {

    const { medallones } = useHomeCategorias()

    return (
        <div className="row mx-0 px-0 w-100  flex-lg-row align-items-center text-center text-lg-start">
            <div className="col-12 mx-0 px-0 col-lg-6 text-center">
                <img
                    className="img-fluid image w-100"
                    src={medallon}
                    alt="Medallón"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="col-12 col-lg-6 px-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                {medallones.map((medallon) => (
                    <div key={medallon.id} className="mb-4">
                        <h2 className="title mb-3" style={{ color: '#E7D7C9' }}>{medallon.titulo}</h2>
                        <h3 style={{ color: '#C7D0CF' }} className="mb-3 fs-5  fs-lg-3">{medallon.descripcion}</h3>
                    </div>
                ))}
                <Link
                    to="/productos?categoria=Medallones"
                    style={{ backgroundColor: '#E7D7C9' }}
                    className="btn mb-5 mb-lg-3 p-2 p-lg-4 fs-4 btn-lg btn-shadow"
                >
                    Comprar Ahora
                </Link>
            </div>
        </div>
    )
}
