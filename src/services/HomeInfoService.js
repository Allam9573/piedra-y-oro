import axios from "axios";

class HomeInfoService {

    getAnillosHomeService() {
        return axios.get('http://localhost:8000/api/home/anillos/')
    }

    getMedallonesHomeService() {
        return axios.get('http://localhost:8000/api/home/medallones/')
    }

}
export default new HomeInfoService();