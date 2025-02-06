import axios from "axios";

class HomeCategoriasService {
    getAnillos() {
        // return axios.get('http://localhost:8000/api/home/anillos/')
        return axios.get('https://lionettas-backend-production.up.railway.app/api/home/anillos/')

    }
    getMedallones() {
        // return axios.get('http://localhost:8000/api/home/medallones/')
        return axios.get('https://lionettas-backend-production.up.railway.app/api/home/medallones/')
    }
}
export default new HomeCategoriasService();