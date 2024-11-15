import { useEffect, useState } from "react"
import ProductoService from "../services/ProductoService"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

const useProductos = () => {

    const [producto, setProducto] = useState({})
    const [productos, setProductos] = useState([])

    const navigate = useNavigate()

    const listarProductos = () => {
        ProductoService.listarProductos()
            .then(response => setProductos(response.data))
            .catch(error => console.log(error))
    }
    const agregarProducto = producto => {
        ProductoService.agregarProducto(producto)
            .then(() => {
                swal("Producto agregado!", "Producto agregado exitosamente!", "success")
                navigate('/admin/productos');
            })
            .catch(error => console.log(error))
    }

    const verProducto = id => {
        ProductoService.buscarProducto(id)
            .then(response => setProducto(response.data))
        return producto
    }

    useEffect(() => {
        listarProductos()
    }, [])

    return {
        productos,
        agregarProducto,
        verProducto,
        producto
    }
}
export { useProductos }