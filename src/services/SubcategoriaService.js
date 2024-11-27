import axios from "axios";

class SubcategoriaService {

    subcategorias() {
        return axios.get('http://localhost:8000/api/subcategorias/')
    }
}

export default new SubcategoriaService();