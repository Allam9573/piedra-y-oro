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
    const agregarProducto = productoFormData => {
        ProductoService.agregarProducto(productoFormData)
            .then(() => {
                swal("Producto agregado!", "Producto agregado exitosamente!", "success")
                navigate('/admin/productos');
            })
            .catch(error => console.log(error))
    }

    const eliminarProducto = id => {
        swal({
            title: "Estas seguro que deseas eliminar este producto?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    ProductoService.eliminarProducto(id)
                        .then(() => {
                            swal("Producto eliminado exitosamente!", {
                                icon: "success",
                            });
                            navigate('/admin/productos');
                        })
                        .catch(error => {
                            swal("Hubo un error al eliminar el producto", {
                                icon: "success",
                            });
                        })
                }
            });
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
        producto,
        eliminarProducto
    }
}
export { useProductos }