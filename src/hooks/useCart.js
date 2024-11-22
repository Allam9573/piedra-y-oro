import { useEffect, useState } from "react"

const useCart = () => {
    const initialCartState = () => {
        try {
            const localStorageCart = localStorage.getItem('cart')
            return localStorageCart ? JSON.parse(cart) : []
        } catch (error) {
            return []
        }
    }
    const [cart, setCart] = useState(initialCartState)

    useEffect(() => {

    }, [cart])

    return {
        cart
    }
}
export { useCart }