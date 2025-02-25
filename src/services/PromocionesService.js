import axios from "axios";

class PromocionesService {
    getPromociones() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/campanas/')
    }
    buscarPromocion(id){
        return axios.get(`https://lionettas-backend-production.up.railway.app/api/campanas/${id}/`)
    }
}
export default new PromocionesService();