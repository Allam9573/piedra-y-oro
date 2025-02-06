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
                            Somos una joyería hondureña dedicada a empoderar a las mujeres a través de nuestros diseños, inspirados en la belleza única y radiante de la feminidad. Queremos transmitir sensaciones que perduren, ofreciendo piezas que no solo resalten tu estilo, sino también tu esencia.

                            Además de nuestras colecciones modernas y sofisticadas, también ofrecemos piezas artesanales diseñadas para acompañarte en los momentos más importantes de la vida de tus seres queridos, como medallas de cuna o bendiciones de hogar. Estas joyas especiales son creaciones llenas de significado, pensadas para celebrar las etapas más significativas y memorables.

                            Nuestras colecciones están pensadas para adaptarse a cada ocasión, con diseños versátiles, modernos y elegantes. Cada pieza es elaborada con un estilo propio y distintivo, logrando joyas únicas para mujeres modernas que aprecian la calidad y saben lo que quieren.

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
