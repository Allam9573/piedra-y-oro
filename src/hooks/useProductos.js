import { useEffect, useState } from "react"
import ProductoService from "../services/ProductoService"

const useProductos = () => {

    const [productos, setProductos] = useState([])

    const listarProductos = () => {
        ProductoService.listarProductos()
            .then(response => setProductos(response.data))
            .catch(error => console.log(error))
    }
    const agregarProducto = producto => {
        ProductoService.agregarProducto(producto)
            .then(() => console.log('agregado'))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listarProductos()
    }, [])

    return {
        productos,
        agregarProducto
    }
}
export { useProductos }