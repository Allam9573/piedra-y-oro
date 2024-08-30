import axios from "axios";

class ProductoService {

    listarProductos() {
        return axios.get('http://localhost:8080/api/productos')
    }
    agregarProducto(producto) {
        return axios.post('http://localhost:8080/api/productos', producto)
    }
    buscarProducto(id) {
        return axios.get(`http://localhost:8080/api/productos/${id}`)
    }

}
export default new ProductoService();