import axios from "axios";

class PromocionesService {
    getPromociones() {
        return axios.get('http://localhost:8000/api/campanas/')
    }
}
export default new PromocionesService();