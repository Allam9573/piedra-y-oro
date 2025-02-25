import { useEffect, useState } from "react"
import PromocionesService from "../services/PromocionesService"

const usePromociones = () => {

    const [promociones, setPromociones] = useState([])
    const [promocion, setPromocion] = useState()

    const listarPromociones = () => {
        PromocionesService.getPromociones()
            .then(response => setPromociones(response.data))
            .catch(error => console.log(error))
    }
    const buscarPromocion = (id) => {
        PromocionesService.buscarPromocion(id)
            .then(response => setPromocion(response.data))
            .catch(error => console.log('Error al cargar la promocion'))
    }

    useEffect(() => {
        listarPromociones()
    }, [])

    return {
        promociones,
        buscarPromocion,
        promocion
    }
}
export { usePromociones }