import axios from "axios";

class FooterService {
    atencionCliente() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/footer/atencion-cliente/')
    }
    acercaDe() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/footer/acerca-de/')
    }
    preguntas() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/footer/preguntas/')
    }
    conectar() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/footer/conectar/')
    }
}
export default new FooterService();