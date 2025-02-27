import React from 'react'
import anillosImage from '../../assets/img/image1.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'

export const HomeAnillos = () => {
    const { anillos } = useHomeCategorias()
    return (

        <div className="container-anillos h-100">
            <div id='puntoRegistro' className="row con mx-0 px-0 w-100 flex-column-reverse flex-lg-row align-items-center text-center text-lg-start">
                <div className="con-anillos-left col-12 col-lg-6 px-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                    {anillos.map(anillo => (
                        <div key={anillo.id}>
                            <h2 className="title" style={{ color: "#E7D7C9" }}>{anillo.titulo}</h2>
                            <h3 className="mb-5 fs-5  fs-lg-3" style={{ color: '#C7D0CF' }}>{anillo.descripcion}</h3>
                        </div>
                    ))}
                    <Link to={`/productos?categoria=Anillos`} style={{ backgroundColor: '#E7D7C9' }} className="btn mb-5 mb-lg-3 p-2 p-lg-4 fs-4 btn-lg btn-shadow">
                        Comprar Ahora
                    </Link>
                </div>
                <div className="col-12 mx-0 px-0 col-lg-6">
                    <img className="img-fluid w-100 image" style={{ objectFit: "cover" }} src={anillosImage} alt="Anillo" />
                </div>
                <script src="../../assets/js/register"></script>
            </div>
        </div>
    )
}
