import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const FAQ = () => {
    const { pathname } = useLocation();
    document.title = 'P & O | Home'
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div class="container my-5">
            <h2 class="text-center h1 mb-4 text-brown fw-bold ">Preguntas Frecuentes</h2>
            <div class="accordion" id="faqAccordion">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="faq1-heading">
                        <button class="accordion-button" style={{ color: '#938E87' }} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            ¿Cuál es el tiempo estimado de entrega?
                        </button>
                    </h2>
                    <div id="faq1" class="accordion-collapse collapse" aria-labelledby="faq1-heading" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Dentro del área urbana de Tegucigalpa, la entrega se efectuará el mismo día si el pedido se procesa antes de las 12 del mediodía. En caso contrario, la entrega se realizará al siguiente día hábil. Para los envíos fuera de Tegucigalpa, el tiempo estimado de entrega es de 2 a 3 días hábiles.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="faq2-heading">
                        <button class="accordion-button collapsed" style={{ color: '#938E87' }} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            ¿Cuál es el método de pago aceptado?
                        </button>
                    </h2>
                    <div id="faq2" class="accordion-collapse collapse" aria-labelledby="faq2-heading" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Aceptamos pagos mediante tarjetas de débito y crédito Visa, MasterCard y American Express a través de un enlace de pago en línea. También tienes la opción de realizar tus compras mediante transferencia bancaria.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="faq3-heading">
                        <button style={{ color: '#938E87' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            ¿Cómo puedo comunicarme con el servicio al cliente si tengo alguna duda o inconveniente?
                        </button>
                    </h2>
                    <div id="faq3" class="accordion-collapse collapse" aria-labelledby="faq3-heading" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Nuestro equipo estará encantado de asistirte. Comunícate al teléfono +504 9999-9999.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="faq4-heading">
                        <button style={{ color: '#938E87' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            ¿Cómo puedo cuidar mis joyas para que duren más tiempo?
                        </button>
                    </h2>
                    <div id="faq4" class="accordion-collapse collapse" aria-labelledby="faq4-heading" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Para mantener tus joyas en excelente estado, te recomendamos guardarlas en su estuche cuando no las estés usando, evitar el contacto con productos químicos y limpiarlas regularmente con un paño suave.
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
