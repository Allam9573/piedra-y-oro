import React, { useEffect } from 'react'
import { HomeCategorias } from '../components/categorias/HomeCategorias'
import { Header } from './Header'
import '../assets/css/styles.css'
import { HomeAnillos } from '../components/categorias/HomeAnillos'
import { HomeMedallones } from '../components/categorias/HomeMedallones'
import { useLocation } from 'react-router-dom'

export const Home = () => {
    document.title = 'Lionettas | Home'

    const { pathname } = useLocation()

    useEffect(() => {
        scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <Header />
            <HomeCategorias />
            <HomeAnillos />
            <HomeMedallones />
        </>
    )
}
