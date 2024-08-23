import React from 'react'
import '../assets/css/custom.css'
import { AboutHero } from '../components/about/AboutHero'
import { AboutServices } from '../components/about/AboutServices'
import { AboutBrands } from '../components/about/AboutBrands'

export const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <AboutServices />
            <AboutBrands />
        </>
    )
}
