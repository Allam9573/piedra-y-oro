import React from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import anillo from '../assets/img/anillo.jpeg'

import '../assets/css/styles.css'

export const Header = () => {

    const { promociones } = usePromociones();

    return (
        <div className='vh-100 w-100 row'>
            <div className="col-6 text-center py-auto flex-column d-flex justify-content-center align-items-center" style={{ backgroundColor: '#C7D0CF' }}>
                <h2 className='title'>Lionettas</h2>
                {
                    promociones.map(promocion => (
                        <div key={promocion.id}>
                            <p className='title-promocion'>{promocion.titulo}</p>
                            <p className='descripcion-promocion'>{promocion.descripcion}</p>
                            <Link to={'/productos'} className='btn-call mt-5'>Inspirate</Link>
                        </div>
                    ))
                }
            </div>
            <div className="h-100 col-6 text-center">
                <img className='h-100 vw-100 img-fluid' src={anillo} alt="" />
            </div>
        </div>
    )
}
