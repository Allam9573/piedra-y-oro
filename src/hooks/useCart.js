import { useEffect, useState } from "react"

const useCart = () => {

    const initialCartState = () => {
        try {
            const localStorageCart = localStorage.getItem('cart')
            return localStorageCart ? JSON.parse(localStorageCart) : []
        } catch (error) {
            return []
        }
    }
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

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return {
        cart,
        addToCart,
        eliminarItemCarrito,
        decrementar,
        incrementar
    }
}
export { useCart }