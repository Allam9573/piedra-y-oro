import axios from "axios";

class CategoriaService {

    listarCategorias() {
        return axios.get('http://localhost:8080/api/categorias')
    }

    nuevaCategoria(categoria) {
        return axios.post('http://localhost:8080/api/categorias', categoria)
    }

}
export default new CategoriaService();