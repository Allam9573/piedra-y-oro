import { useEffect, useState } from "react"
import CategoriaService from "../services/CategoriaService"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

const useCategorias = () => {

    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])

    const listarCategorias = () => {
        CategoriaService.listarCategorias()
            .then(response => setCategorias(response.data))
            .catch(error => console.log(error))
    }

    const agregarCategoria = categoria => {
        CategoriaService.nuevaCategoria(categoria)
            .then(() => {
                swal("Categoria agregada!", "Categoria agregada exitosamente!", "success")
                navigate('/admin');

            })
            .catch(() => swal("Error inesperado!", "Ocurrio un error al guardar la categoria", "error"))
    }

    useEffect(() => {
        listarCategorias()
    }, [])

    return {
        categorias,
        agregarCategoria
    }


}
export { useCategorias }