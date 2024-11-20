import React from 'react'
import { HomeCategorias } from '../components/categorias/HomeCategorias'
import { Header } from './Header'
import { Promociones } from './Promociones'
import { usePromociones } from '../hooks/usePromociones'

export const Home = () => {
    const { promociones } = usePromociones()
    const header = promociones.length !== 0 ? <Promociones promociones={promociones} /> : <Header />
    return (
        <>
            {header}
            <HomeCategorias />
        </>
    )
}
