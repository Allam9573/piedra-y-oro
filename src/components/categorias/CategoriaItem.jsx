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
              resultados.map(({ id, nombre }) => (
                <tr key={id}>
                  <th scope="row">{nombre}</th>
              
                  <td>
                    <Link className='btn btn-success me-2'>Editar</Link>
                    <Link to={`/admin/eliminar-categoria/${id}`} className='btn btn-danger'>Eliminar</Link>
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
