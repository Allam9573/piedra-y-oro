import RegistroClientesService from "../services/RegistroClientesService"

const useRegistroClientes = () => {

    const addCliente = cliente => {
        RegistroClientesService.addCliente(cliente)
            .then(() => {
                swal({
                    title: "Gracias por registrarte con nosotros!",
                    icon: "success",
                    button: "Listo",
                });
            })
            .catch(error => console.log(error))
    }
    return {
        addCliente
    }
}
export { useRegistroClientes }