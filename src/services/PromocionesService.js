import axios from "axios";

class PromocionesService {
    getPromociones() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/campanas/')
    }
}
export default new PromocionesService();