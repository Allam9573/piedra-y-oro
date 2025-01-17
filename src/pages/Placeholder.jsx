import React from 'react'
import image from '../assets/img/trafico.png'
import { Link } from 'react-router-dom'

export const Placeholder = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <img src={image} width={'20%'} alt="" />
        <h1>Sitio Web en construccion</h1>
        <Link className='btn btn-success'>Home</Link>
    </div>
  )
}
