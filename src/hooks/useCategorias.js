import { useEffect, useState } from "react"
import CategoriaService from "../services/CategoriaService"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

const useCategorias = () => {

    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState({})
    const [categoriasEliminadas, setCategoriasEliminadas] = useState([])

    const listarCategorias = () => {
        CategoriaService.listarCategorias()
            .then(response => setCategorias(response.data))
            .catch(error => console.log(error))
    }

    const agregarCategoria = categoria => {
        CategoriaService.nuevaCategoria(categoria)
            .then(() => {
                swal("Categoria agregada!", "Categoria agregada exitosamente!", "success")
                navigate('/admin/categorias');

            })
            .catch(() => swal("Error al guardar!", "Ocurrio un error al guardar la categoria, verifica que el campo a guardar tenga un dato valido.", "error"))
    }

    const buscarCategoria = id => {
        CategoriaService.buscarCategoria(id)
            .then(response => setCategoria(response.data))
            .catch(error => console.log(error))
        return categoria
    }

    const eliminarCategoria = id => {
        CategoriaService.eliminarCategoria(id)
            .then(() => {
                swal('Categoria eliminada!', 'Categoria eliminada exitosamente.', 'success')
                navigate('/admin/categorias')
            })
            .catch(error => console.log(error))
    }

    const listarCategoriasEliminadas = () => {
        CategoriaService.listarCategoriasEliminadas()
            .then(response => setCategoriasEliminadas(response.data))
            .catch(error => console.log(error))
    }

    const restaurarCategoria = id => {
        CategoriaService.restaurarCategoria(id)
            .then(() => {
                swal('Categoria restaurada!', 'Categoria restaurada exitosamente.', 'success')
                navigate('/admin/categorias/eliminadas')
            })
            .catch(error => console.log(error))
    }
    const buscarCategoriaPorNombre = categoria => {
        CategoriaService.buscarCategoriaPorNombre(categoria)
            .then(response => setCategoria(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listarCategorias()
    }, [])

    return {
        categorias,
        agregarCategoria,
        buscarCategoria,
        categoria,
        eliminarCategoria,
        categoriasEliminadas,
        listarCategoriasEliminadas,
        restaurarCategoria,
        buscarCategoriaPorNombre
    }
}

export { useCategorias }