import { useEffect, useState } from "react"
import HomeInfoService from "../services/HomeInfoService"

const useHomeInfo = () => {

    const [infoAnillos, setInfoAnillos] = useState([])
    const [infoMedallones, setinfoMedallones] = useState([])

    const getInfoAnillos = () => {
        HomeInfoService.getAnillosHomeService()
            .then(response => setInfoAnillos(response.data))
            .catch(error => console.log('error'))
    }

    const getInfoMedallones = () => {
        HomeInfoService.getAnillosHomeService()
            .then(response => setInfoAnillos(response.data))
            .catch(error => console.log('error'))
    }

    useEffect(() => {
        getInfoAnillos()
        getInfoMedallones()
    }, [])

    return {
        infoAnillos,
        infoMedallones
    }
}
export { useHomeInfo }