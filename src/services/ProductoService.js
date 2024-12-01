import axios from "axios";

class ProductoService {

    listarProductos() {
        // return axios.get('http://localhost:8000/api/productos/')
        return axios.get('https://lionettas-backend.onrender.com/api/productos/')
    }
    agregarProducto(producto) {
        //     return axios.post('http://localhost:8000/api/productos/', producto, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     })
        return axios.post('https://lionettas-backend.onrender.com/api/productos/', producto, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    buscarProducto(id) {
        // return axios.get(`http://localhost:8000/api/productos/${id}/`)
        return axios.get(`https://lionettas-backend.onrender.com/api/productos/${id}/`)
    }

    eliminarProducto(id) {
        return axios.delete(`http://localhost:8000/api/productos/${id}/`)
    }

}
export default new ProductoService();