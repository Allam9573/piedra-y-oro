import axios from "axios";

class ProductoService {

    listarProductos() {
        return axios.get('https://lionettas-backend.onrender.com/api/productos/')
    }
    agregarProducto(producto) {
        return axios.post('http://localhost:8000/api/productos/', producto)
    }
    buscarProducto(id) {
        return axios.get(`http://localhost:8000/api/productos/${id}/`)
    }

}
export default new ProductoService();