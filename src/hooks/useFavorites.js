import { useEffect, useState } from "react"

const useFavorites = () => {

    const initialStateFavorites = () => {

        try {
            const localFavorites = localStorage.getItem('favorites')
            return localFavorites ? JSON.parse(localFavorites) : []
        } catch (error) {
            return []
        }
    }

    const [favorites, setFavorites] = useState(initialStateFavorites)

    const addFavorite = producto => {
        const buscar = favorites.findIndex(pro => pro.id === producto.id)
        if (buscar >= 0) {
            return
        } else {
            setFavorites([...favorites, producto])
        }
    }

    const deleteItem = producto => {
        const confirmDelete = window.confirm(`Seguro que deseas eliminar "${producto.nombre}" de tu lista de deseos?`)
        if (confirmDelete) {
            setFavorites(favorites.filter(productos => productos.nombre !== producto.nombre))
        }
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return {
        favorites,
        addFavorite,
        deleteItem
    }
}
export { useFavorites }