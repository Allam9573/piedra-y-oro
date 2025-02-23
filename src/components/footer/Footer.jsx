import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo_blanco from '../../assets/img/logo_blanco.png'
import { useFooter } from '../../hooks/useFooter';
import { Link } from 'react-router-dom';
import { useRegistroClientes } from '../../hooks/useRegistroClientes';

export const Footer = () => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const { addCliente } = useRegistroClientes()

    const SubmitCliente = e => {
        e.preventDefault()
        const nuevoCliente = {
            nombre_cliente: nombre,
            numero_telefonico: telefono
        }
        addCliente(nuevoCliente)
        setNombre('')
        setTelefono('')
    }

    return (
        <footer class="" style={{ backgroundColor: '#343A36' }} id="tempaltemo_footer">
            <div class="container">
                <div class="col-md-4 pt-5">
                    <img src={logo_blanco} width={'60%'} alt="" />
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="https://wa.me/+50494969595">Tel: +504 9496-9595</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:lionettashn@gmail.com">lionettashn@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h2 class="h5 text-light border-bottom pb-3 border-light">Siguenos</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li class="list-inline-item">
                                <a rel="nofollow" class="text-light text-decoration-none" target="_blank" href="https://www.facebook.com/share/1FGKwQ98qn/?mibextid=wwXIfr"><FaFacebook className='fs-3' /></a>
                            </li>
                            <li class="list-inline-item">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/lionettasjoyeria?igsh=c3hjZHBhNWh4MmNn&utm_source=qr"><FaInstagram className='fs-3' /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <ul class="list-unstyled text-light footer-link-list">
                            <Link className='text-decoration-none' to={'/nosotros'}><h5 class="h5 text-light pb-3 border-light">Quienes Somos</h5></Link>
                            <Link className='text-decoration-none' to={'/preguntas-frecuentes'}><h5 class="h5 text-light pb-3 border-light">Preguntas Frecuentes</h5></Link>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h6 class="h6 text-light pb-3 border-light">
                            Unete a nuestra comunidad y mantente al dia con las ultimas noticias y promociones!
                            </h6>
                        <ul class="list-unstyled text-light footer-link-list">
                            <form onSubmit={SubmitCliente}>
                                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder='Nombre' className="form-control mb-3" />
                                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} placeholder='Telefono' className="form-control mb-3" />
                                <input disabled={nombre.length === 0 || telefono.length === 0} type="submit" value="Unete!" className='btn text-white w-100' style={{ backgroundColor: '#938E87' }} />
                            </form>
                        </ul>
                    </div>
                </div>
                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div class="w-100 my-3 border-top border-light"></div>
                    </div>
                </div>
            </div>
            <div class="w-100 bg-black py-3">
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-12">
                            <p class="text-left text-light">
                                Copyright &copy; 2025 Lionettas | Todos los derechos reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
