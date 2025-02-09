import React, { useEffect } from 'react'
import '../assets/css/custom.css'
import { AboutHero } from '../components/about/AboutHero'
import { AboutServices } from '../components/about/AboutServices'
import { AboutBrands } from '../components/about/AboutBrands'
import { useLocation } from 'react-router-dom'

export const AboutPage = () => {
    document.title = 'Lionettas | Nosotros'

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <AboutHero />
            <AboutServices />
            <AboutBrands />
        </>
    )
}
