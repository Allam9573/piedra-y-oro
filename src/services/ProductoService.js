import axios from "axios";

class ProductoService {

    listarProductos() {
        return axios.get('http://localhost:8000/api/productos/')
    }
    agregarProducto(producto) {
        return axios.post('http://localhost:8000/api/productos/', producto, {
            headers: {
                'Content-Type': 'multipart/form-data', // Axios ajustará esto automáticamente si usas FormData.
            },
        })
    }
    buscarProducto(id) {
        return axios.get(`http://localhost:8000/api/productos/${id}/`)
    }

}
export default new ProductoService();