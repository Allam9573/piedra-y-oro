import React from 'react'
import imagen from '../assets/img/ecommerce.png'
import { Link } from 'react-router-dom'
import '../assets/css/styles.css'

export const Header = () => {
    return (
        <div className='vh-100 w-100 row'>
            <div className="col-6 text-center d-flex justify-content-center align-items-center" style={{ backgroundColor: '#C7D0CF' }}>
                <h2 className='title'>Lionettas</h2>
            </div>
            <div className="col-6 text-center" style={{ backgroundColor: '#EDE9E3' }}>

            </div>
        </div>
    )
}
