import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductoEliminar = () => {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
}
