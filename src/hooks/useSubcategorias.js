import { useEffect, useState } from "react"
import SubcategoriaService from "../services/SubcategoriaService"

const useSubcategorias = () => {

    const [subcategorias, setSubcategorias] = useState([])

    const categorias = () => {
        SubcategoriaService.subcategorias()
            .then(response => setSubcategorias(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        categorias()
    }, [])

    return {
        subcategorias
    }
}
export { useSubcategorias }