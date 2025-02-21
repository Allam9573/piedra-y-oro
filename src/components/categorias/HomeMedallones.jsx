import React from 'react'
import medallon from '../../assets/img/image2.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
export const HomeMedallones = () => {
    const { medallones } = useHomeCategorias()
    return (
        <div className="row w-100 mx-0 px-0 flex-lg-row">
            <div className="col-12 mx-0 px-0 col-lg-6 text-center">
                <img
                    className="img-fluid image w-100"
                    src={medallon}
                    alt="Medallón"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start text-center text-lg-start p-4 p-lg-5">
                {medallones.map((medallon) => (
                    <div key={medallon.id} className="mb-4">
                        <h2 className="title" style={{ color: '#E7D7C9' }}>{medallon.titulo}</h2>
                        <h3 style={{ color: '#C7D0CF' }} className="text-start">{medallon.descripcion}</h3>
                    </div>
                ))}
                <Link
                    to="/productos?categoria=Medallones"
                    style={{ backgroundColor: '#E7D7C9' }}
                    className="btn p-4 fs-4 btn-lg"
                >
                    Comprar Ahora
                </Link>
            </div>
        </div>
    )
}
