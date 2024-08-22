import { useEffect, useState } from "react"
import CategoriaService from "../services/CategoriaService"

const useCategorias = () => {

    const [categorias, setCategorias] = useState([])

    const listarCategorias = () => {
        CategoriaService.listarCategorias()
            .then(response => setCategorias(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listarCategorias()
    }, [])

    return {
        categorias
    }


}
export { useCategorias }