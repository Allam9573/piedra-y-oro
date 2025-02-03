import { useEffect, useState } from "react"
import HomeCategoriasService from "../services/HomeCategoriasService"

const useHomeCategorias = () => {

    const [anillos, setAnillos] = useState([])
    const [medallones, setMedallones] = useState([])

    const getAnillos = () => {
        HomeCategoriasService.getAnillos()
            .then(response => setAnillos(response.data))
            .catch(error => console.log(error))
    }
    const getMedallones = () => {
        HomeCategoriasService.getMedallones()
            .then(response => setMedallones(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAnillos()
        getMedallones()
    }, [])

    return {
        anillos,
        medallones
    }
}
export { useHomeCategorias }