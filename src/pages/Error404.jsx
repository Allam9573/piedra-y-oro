import React from 'react'
import imagen from '../assets/img/404.png'
import { Link } from 'react-router-dom'
export const Error404 = () => {
    return (
        <div className="container">
            <div className="card p-5 shadow text-center my-5">
                <h1 className='text-secondary display-6'>Parece que no encontramos lo que buscabas!</h1>
                <img src={imagen} className='mx-auto' width={'60%'} alt="" />
                <Link to={'/'} className='btn btn-success mx-auto btn-lg p-2 px-5'>Inicio</Link>
            </div>
        </div>
    )
}
