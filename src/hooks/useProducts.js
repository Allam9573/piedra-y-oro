import { useEffect, useState } from "react"

const useProducts = () => {

    const [products, setProducts] = useState([])

    const allProducts = () => {

    }

    useEffect(() => {
        allProducts()
    }, [])

    return {
        products
    }
}
export { useProducts }