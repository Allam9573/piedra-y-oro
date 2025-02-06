import React from 'react'
import { Link } from 'react-router-dom'
import { usePromociones } from '../hooks/usePromociones'
import anillo from '../assets/img/anillo.jpeg'
import logo from '../assets/img/logo_verde.png'
import '../assets/css/styles.css'

export const Header = () => {

    const { promociones } = usePromociones();

    return (
        <div className='vh-100 w-100 row'>
            <div className="col-6 text-center px-5 py-auto flex-column d-flex justify-content-center align-items-start" style={{ backgroundColor: '#C7D0CF' }}>
                <img src={logo} style={{width:'50%'}} className='mb-3' alt="" />
                {
                    promociones.map(promocion => (
                        <div key={promocion.id} className='text-start'>
                            <p className='title-promocion mt-5'>{promocion.titulo}</p>
                            <p className='descripcion-promocion mb-5'>{promocion.descripcion}</p>
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
