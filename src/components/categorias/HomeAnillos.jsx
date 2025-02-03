import React from 'react'
import anillosImage from '../../assets/img/image1.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'

export const HomeAnillos = () => {
    const { anillos } = useHomeCategorias()
    return (
        <div className='vh-100 w-100 row'>
            <div className="col-6 text-center py-auto flex-column d-flex justify-content-center align-items-center">
                {
                    anillos.map(anillo => (
                        <div key={anillo.id}>
                            <h2 className='h1 mb-3' style={{ color: "#E7D7C9" }}>{anillo.titulo}</h2>
                            <h3 style={{ color: '#C7D0CF' }} className='mx-5 text-start mb-5'>{anillo.descripcion}</h3>
                        </div>
                    ))
                }
                <Link to={`/productos?categoria=Anillos`} style={{ backgroundColor: '#E7D7C9' }} className='btn btn-lg'>Comprar Ahora</Link>
            </div>
            <div className="h-100 col-6 text-center">
                <img className='h-100 vw-100 img-fluid' src={anillosImage} alt="" />
            </div>
        </div>
    )
}
