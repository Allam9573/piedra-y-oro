import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo_blanco from '../../assets/img/logo_blanco.png'
import { useFooter } from '../../hooks/useFooter';

export const Footer = () => {
    const { itemsAtencionCliente, itemsAcercaDe, itemsPreguntas, itemsConectar } = useFooter()
    return (
        <footer class="bg-dark" id="tempaltemo_footer">
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
                            <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                </div>
                <div class="row">

                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Atencion al Cliente</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            {
                                itemsAtencionCliente.map(item => (
                                    <li key={item.id}><a class="text-decoration-none" href="#">{item.descripcion}</a></li>
                                ))
                            }
                        </ul>
                    </div>


                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Acerca de</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            {
                                itemsAcercaDe.map(item => (
                                    <li key={item.id}><a class="text-decoration-none" href="#">{item.descripcion}</a></li>
                                ))
                            }
                        </ul>
                    </div>


                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Preguntas</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            {
                                itemsPreguntas.map(item => (
                                    <li key={item.id}><a class="text-decoration-none" href="#">{item.descripcion}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div class="col-12 col-sm-6 col-md-3 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Conectar</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                        {
                                itemsConectar.map(item => (
                                    <li key={item.id}><a class="text-decoration-none" href="#">{item.descripcion}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                </div>


                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div class="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div class="col-auto me-auto">
                        <ul class="list-inline text-left">
                            <li class="list-inline-item">
                                <a rel="nofollow" class="text-light text-decoration-none" target="_blank" href="http://fb.com/templatemo"><FaFacebook className='fs-3' /></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><FaInstagram className='fs-3' /></a>
                            </li>
                        </ul>
                    </div>
                    {/* <div class="col-auto">
                        <label class="sr-only" htmlFor="subscribeEmail">Email address</label>
                        <div class="input-group mb-2">
                            <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                            <div class="input-group-text btn-success text-light">Subscribe</div>
                        </div>
                    </div> */}
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
