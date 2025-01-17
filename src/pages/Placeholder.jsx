import React from 'react'
import image from '../assets/img/trafico.png'

export const Placeholder = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
        <img src={image} width={'20%'} alt="" />
        <h1>Sitio Web en construccion</h1>
    </div>
  )
}
