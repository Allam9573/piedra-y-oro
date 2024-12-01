import React from 'react'
import image from '../../assets/img/about-hero.svg'

export const AboutHero = () => {
    return (
        <section class="bg-success py-5">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-md-8 text-white">
                        <h1>Quienes Somos</h1>
                        <p>
                            En Lionettas, estamos comenzando con la misión de ofrecer productos que llenen de significado y estilo tu vida. Nuestro catálogo incluye artículos religiosos, productos para niños llenos de alegría y joyería para resaltar tu belleza única.

                            Cada artículo ha sido seleccionado con dedicación para acompañarte en tus momentos más especiales. Aunque somos una tienda en línea naciente, estamos comprometidos con ofrecerte una experiencia de compra sencilla y cercana.

                            Gracias por confiar en nosotros desde el inicio. ¡Crecemos contigo y para ti!
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src={image} alt="About Hero" />
                    </div>
                </div>
            </div>
        </section>
    )
}
