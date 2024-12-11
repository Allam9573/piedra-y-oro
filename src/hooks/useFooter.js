import { useEffect, useState } from "react"
import FooterService from "../services/FooterService"

const useFooter = () => {

    const [itemsAtencionCliente, setItemsAtencionCliente] = useState([])
    const [itemsAcercaDe, setItemsAcercaDe] = useState([])
    const [itemsPreguntas, setItemsPreguntas] = useState([])
    const [itemsConectar, setItemsConectar] = useState([])

    const listarItemsAtencionCliente = () => {
        FooterService.atencionCliente()
            .then(response => setItemsAtencionCliente(response.data))
            .catch(error => console.log(error))
    }

    const listarItemsAcercaDe = () => {
        FooterService.acercaDe()
            .then(response => setItemsAcercaDe(response.data))
            .catch(error => console.log(error))
    }
    const listarItemsPreguntas = () => {
        FooterService.preguntas()
            .then(response => setItemsPreguntas(response.data))
            .catch(error => console.log(error))
    }
    const listarItemsConectar = () => {
        FooterService.conectar()
            .then(response => setItemsConectar(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listarItemsAtencionCliente()
        listarItemsAcercaDe()
        listarItemsPreguntas()
        listarItemsConectar()
    }, [])

    return {
        itemsAtencionCliente,
        itemsAcercaDe,
        itemsPreguntas,
        itemsConectar
    }
}
export { useFooter }