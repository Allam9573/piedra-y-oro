import React, { useEffect } from 'react'
import { useCategorias } from '../../../hooks/useCategorias'
import { TablaCategoriasEliminadas } from './TablaCategoriasEliminadas'

export const CategoriasEliminadas = () => {

    return (
        <>
            <div className="container">
                <h2 className='text-secondary my-5'>Categorias Eliminadas</h2>
                <TablaCategoriasEliminadas />
            </div>
        </>
    )
}
