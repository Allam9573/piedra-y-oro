import axios from "axios";

class SubcategoriaService {

    subcategorias() {
        return axios.get('https://lionettas-backend.onrender.com/api/subcategorias/')
    }
    nuevaSubcategorias(subcategoria) {
        return axios.post('https://lionettas-backend.onrender.com/api/subcategorias/', subcategoria)
    }
}

export default new SubcategoriaService();