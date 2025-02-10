import axios from "axios";

class RegistroClientesService {

    addCliente(cliente) {
        return axios.post(`http://localhost:8000/api/clientes-registrados/`, cliente)
    }

}
export default new RegistroClientesService();