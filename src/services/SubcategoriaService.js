import axios from "axios";

class SubcategoriaService {

    subcategorias() {
        return axios.get('https://lionettas-backend.onrender.com/api/subcategorias/')
    }
}

export default new SubcategoriaService();