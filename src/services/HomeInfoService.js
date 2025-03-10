import axios from "axios";

class HomeInfoService {

    getAnillosHomeService() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/home/anillos/')
    }

    getMedallonesHomeService() {
        return axios.get('https://lionettas-backend-production.up.railway.app/api/home/medallones/')
    }

}
export default new HomeInfoService();