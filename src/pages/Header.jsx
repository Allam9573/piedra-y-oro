import React from 'react'
import imagen from '../assets/img/header.jpg'

export const Header = () => {
    return (
        <div className='vh-100'>
            <img src={imagen} width={'100%'} height={'100%'} alt="" />
        </div>
    )
}
