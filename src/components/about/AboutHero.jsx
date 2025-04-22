import React from 'react'
import image from '../../assets/img/about.svg'

export const AboutHero = () => {
    document.title = 'P & O | Home'
    return (
        <>
            <section class="py-5 desktop-about">
                <div class="container">
                    <div class="row align-items-center py-5">
                        <h1 className='text-brown text-center h1'>Quienes Somos</h1>
                        <div class="col-md-8 p-5">
                            <p className='text-about-mobile text-about'>
                                Somos una joyería hondureña apasionada por el arte, la elegancia y la historia que cada pieza puede contar. Desde nuestros inicios, nos hemos dedicado a ofrecer joyas únicas que reflejan la belleza, la fuerza y la autenticidad de nuestra gente.
                                <br /><br />
                                Trabajamos con materiales de alta calidad y diseños cuidadosamente seleccionados para cada ocasión especial: desde anillos de compromiso y collares delicados, hasta detalles personalizados que se convierten en tesoros para toda la vida.
                                <br /><br />
                                Más que vender joyas, celebramos momentos, unimos corazones y honramos tradiciones. Cada pieza que entregamos es un símbolo de amor, éxito o recuerdo eterno.
                                <br /><br />
                                Somos orgullo catracho, y nuestra misión es brillar contigo en cada etapa de tu vida.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <img src={image} width={'100%'} alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
            {/* vista mobile */}
            <section class="about-mobile">
                <div class="container">
                    <div class="row align-items-center mt-3">
                        <h1 className='text-brown text-center h1'>Quienes Somos</h1>
                        <div class="col-md-8 py-4">
                            <p className='text-about-mobile text-about'>
                                Somos una joyería hondureña dedicada a empoderar a las mujeres a través de nuestros diseños, inspirados en la belleza única y radiante de la feminidad. Queremos transmitir sensaciones que perduren, ofreciendo piezas que no solo resalten tu estilo, sino también tu esencia.
                                <br /><br />
                                Además de nuestras colecciones modernas y sofisticadas, también ofrecemos piezas artesanales diseñadas para acompañarte en los momentos más importantes de la vida de tus seres queridos, como medallas de cuna o bendiciones de hogar. Estas joyas especiales son creaciones llenas de significado, pensadas para celebrar las etapas más significativas y memorables.
                                <br /><br />
                                Nuestras colecciones están pensadas para adaptarse a cada ocasión, con diseños versátiles, modernos y elegantes. Cada pieza es elaborada con un estilo propio y distintivo, logrando joyas únicas para mujeres modernas que aprecian la calidad y saben lo que quieren.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <img src={image} width={'100%'} alt="About Hero" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
