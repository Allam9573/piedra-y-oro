import axios from "axios";

class CategoriaService {

    listarCategorias() {
        // return axios.get('http://localhost:8000/api/categorias/')
        return axios.get('https://lionettas-backend-production.up.railway.app/api/categorias/')
    }

    nuevaCategoria(categoria) {
        return axios.post('http://localhost:8000/api/categorias/', categoria)
    }

    buscarCategoria(id) {
        return axios.get(`http://localhost:8000/api/categorias/${id}/`)
    }

    eliminarCategoria(id) {
        return axios.delete(`http://localhost:8000/api/categorias/${id}/`)
    }

}

export default new CategoriaService();