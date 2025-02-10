import RegistroClientesService from "../services/RegistroClientesService"

const useRegistroClientes = () => {

    const addCliente = cliente => {
        RegistroClientesService.addCliente(cliente)
            .then(() => {
                swal("Registro exitoso!", "Registro exitoso!", "success")
            })
            .catch(error => console.log(error))
    }
    return {
        addCliente
    }
}
export { useRegistroClientes }