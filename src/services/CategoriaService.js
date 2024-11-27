import axios from "axios";

class CategoriaService {

    listarCategorias() {
        // return axios.get('http://localhost:8000/api/categorias/')
        return axios.get('https://lionettas-backend.onrender.com/api/categorias/')
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

    listarCategoriasEliminadas() {
        return axios.get('http://localhost:8080/api/categorias/eliminadas')
    }

    restaurarCategoria(id) {
        return axios.get(`http://localhost:8080/api/categorias/restaurar/${id}`)
    }

    buscarCategoriaPorNombre(categoria) {
        return axios.get(`http://localhost:8080/api/categorias/cat/${categoria}`)
    }

}

export default new CategoriaService();