import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import imagen from '../../assets/img/foco.jpg'
import { useProductos } from '../../hooks/useProductos'

export const ProductoView = () => {

    const { id } = useParams()
    const { verProducto } = useProductos()

    useEffect(() => {
        verProducto(id)
    }, [])

    return (
        <>

        </>
    )
}
