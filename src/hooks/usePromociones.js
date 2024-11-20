import { useEffect, useState } from "react"
import PromocionesService from "../services/PromocionesService"

const usePromociones = () => {

    const [promociones, setPromociones] = useState([])

    const listarPromociones = () => {
        PromocionesService.getPromociones()
            .then(response => setPromociones(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listarPromociones()
    }, [])

    return {
        promociones
    }
}
export { usePromociones }