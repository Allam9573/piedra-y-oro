import React, { useState } from 'react'
import { useProductos } from '../../hooks/useProductos'

export const NuevaVenta = () => {
    const { productos } = useProductos()
    const [cliente, setCliente] = useState('Consumidor Final')
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-8">
                    <div className="card py-5">
                        <div className='d-flex flex-wrap justify-content-around'>
                            {
                                productos.map(producto => (
                                    <div key={producto.id} onClick={() => alert()} className="card pointer mx-3 shadow p-5">
                                        <img src={''} alt="" />
                                        <h5>{producto.nombre}</h5>
                                        <h5>Lps. {producto.precio}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card shadow p-3">

                        <form>
                            <input type="text" placeholder={cliente} value={cliente} className="form-control mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
