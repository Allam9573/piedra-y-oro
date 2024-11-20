import React from 'react'
import imagen from '../assets/img/ecommerce.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className='vh-100 d-flex flex-row align-items-center justify-content-around'>
            <div className='text-center'>
                <h2 className='mb-5 text-success display-5 mx-5'>Encuentra el look perfecto, sin salir de casa.</h2>
                <Link to={'/productos'} className='btn btn-success rounded-pill'>Ver Mas</Link>
            </div>
            <img src={imagen} width={'50%'} alt="" />
        </div>
    )
}
