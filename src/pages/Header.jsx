import React from 'react'
import imagen from '../assets/img/ecommerce.png'
import { Link } from 'react-router-dom'
import '../assets/css/styles.css'
import { usePromociones } from '../hooks/usePromociones'

export const Header = () => {
    const { promociones } = usePromociones();
    return (
        <div className='vh-100 w-100 row'>
            <div className="col-6 text-center py-auto flex-column d-flex justify-content-center align-items-center" style={{ backgroundColor: '#C7D0CF' }}>
                <h2 className='title'>Lionettas</h2>
                {
                    promociones.map(promocion => (
                        <>
                            <p className='title-promocion'>{promocion.titulo}</p>
                            <p className='descripcion-promocion'>{promocion.descripcion}</p>
                            <Link className='btn-call mt-5'>Inspirate</Link>
                        </>
                    ))
                }
            </div>
            <div className="col-6 text-center" style={{ backgroundColor: '#EDE9E3' }}>

            </div>
        </div>
    )
}
