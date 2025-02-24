import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const useCart = () => {
    const notifyAdd = (producto) => toast.success(`"${producto.nombre}" agregado al carrito de compras!`);

    const initialCartState = () => {
        try {
            const localData = localStorage.getItem("cart");
            if (!localData) return [];

            const parsedData = JSON.parse(localData);
            if (!parsedData || !parsedData.items) return [];

            const { items, timestamp } = parsedData;

            if (!Array.isArray(items)) return []; // Evita errores si no es un array

            if (Date.now() - timestamp > EXPIRATION_TIME) {
                localStorage.removeItem("cart");
                return [];
            }

            return items;
        } catch (error) {
            console.error("Error al leer carrito:", error);
            return [];
        }
    };

    const [cart, setCart] = useState(initialCartState)


    const addToCart = producto => {
        const itemExist = cart.findIndex(pro => pro.id === producto.id)
        if (itemExist >= 0) {
            const updateCart = [...cart]
            updateCart[itemExist].cantidad++
            setCart(updateCart)
        } else {
            producto.cantidad = 1
            setCart([...cart, producto])
            notifyAdd(producto)
        }
    }

    const decrementar = id => {
        const updateCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1
                }
            }
            return item
        })
        setCart(updateCart)
    }
    const incrementar = id => {
        const updateCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    cantidad: item.cantidad + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    const eliminarItemCarrito = nombreProducto => {
        const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el producto "${nombreProducto}"?`);
        if (confirmDelete) {
            const updateCart = cart.filter(productos => productos.nombre !== nombreProducto)
            setCart(updateCart)
        }
    }

    const vaciarCarrito = () => {
        localStorage.removeItem("cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return {
        cart,
        addToCart,
        eliminarItemCarrito,
        decrementar,
        incrementar,
        vaciarCarrito
    }
}
export { useCart }