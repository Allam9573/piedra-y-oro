import axios from "axios";

class SubcategoriaService {

    subcategorias() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/subcategorias/')
        // return axios.get('http://localhost:8000/api/subcategorias/')
    }
    nuevaSubcategorias(subcategoria) {
        return axios.post('https://lionettas-backend-production.up.railway.app/api/subcategorias/', subcategoria)
    }
}

export default new SubcategoriaService();