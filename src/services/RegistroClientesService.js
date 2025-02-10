import axios from "axios";

class RegistroClientesService {

    addCliente(cliente) {
        return axios.post(`https://lionettas-backend-production.up.railway.app/api/clientes-registrados/`, cliente)
    }

}
export default new RegistroClientesService();