import React from 'react'
import medallon from '../../assets/img/image2.png'
import { Link } from 'react-router-dom'
import { useHomeCategorias } from '../../hooks/useHomeCategorias'
export const HomeMedallones = () => {
    const { medallones } = useHomeCategorias()
    return (
        <div className='vh-100 w-100 row'>
            <div className="h-100 col-6 text-center">
                <img className='h-100 vw-100 img-fluid' src={medallon} alt="" />
            </div>
            <div className="col-6 text-center py-auto flex-column d-flex justify-content-center align-items-center">
                {
                    medallones.map(medallon => (
                        <div key={medallon.id}>
                            <h2 className='title' style={{ color: '#E7D7C9' }}>{medallon.titulo}</h2>
                            <h3 style={{ color: '#C7D0CF' }} className='mx-5 text-start'>{medallon.descripcion}</h3>

                        </div>
                    ))
                }
                <Link to={`/productos?categoria=Medallones`} style={{ backgroundColor: '#E7D7C9' }} className='btn btn-lg'>Comprar Ahora</Link>

            </div>
        </div>
    )
}
