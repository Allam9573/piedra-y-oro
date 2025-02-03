import React from 'react'
import { HomeCategorias } from '../components/categorias/HomeCategorias'
import { Header } from './Header'
import { Promociones } from './Promociones'
import { usePromociones } from '../hooks/usePromociones'
import '../assets/css/styles.css'
import { HomeAnillos } from '../components/categorias/HomeAnillos'
import { HomeMedallones } from '../components/categorias/HomeMedallones'

export const Home = () => {
    document.title = 'Lionettas | Home'
    const { promociones = [] } = usePromociones()
    // const header = promociones.length !== 0 ? <Promociones promociones={promociones} /> : <Header />

    return (
        <>
            {/* {header} */}
            <Header />
            <HomeCategorias />
            <HomeAnillos />
            <HomeMedallones />
        </>
    )
}
