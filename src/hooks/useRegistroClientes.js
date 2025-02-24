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
            .catch(() => {
                swal({
                    title: "Numero de telefono ya registrado!",
                    icon: "error",
                    button: "Listo",
                });
            })
    }
    return {
        addCliente
    }
}
export { useRegistroClientes }