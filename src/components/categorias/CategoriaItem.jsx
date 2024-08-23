import React from 'react'
import { useCategorias } from '../../hooks/useCategorias'
import { Link } from 'react-router-dom'

export const CategoriaItem = ({ buscar }) => {

  const { categorias } = useCategorias()
  const resultados = categorias.filter(categoria => categoria.nombre.toLowerCase().includes(buscar.trim().toLowerCase()))

  const EditarCategoria = id => {

  }

  const ActualizarCategoria = () => {

  }

  return (
    <>
      {
        resultados.length !== 0 ?
          <>
            {
              resultados.map(({ idCategoria, nombre }) => (
                <tr key={idCategoria}>
                  <th scope="row">{nombre}</th>
                  <td>
                    <Link className='btn btn-success me-2'>Editar</Link>
                    <Link className='btn btn-danger'>Eliminar</Link>
                  </td>
                </tr>
              ))
            }
          </> :
          <>
            <h2>Sin resultados</h2>
          </>
      }
    </>
  )
}
