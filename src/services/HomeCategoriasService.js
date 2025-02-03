import axios from "axios";

class HomeCategoriasService {
    getAnillos() {
        return axios.get('http://localhost:8000/api/home/anillos/')
    }
    getMedallones() {
        return axios.get('http://localhost:8000/api/home/medallones/')
    }
}
export default new HomeCategoriasService();