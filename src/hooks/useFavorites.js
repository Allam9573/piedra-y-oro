import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 3;

const useFavorites = () => {
    const notifyAdd = (producto) => toast.success(`"${producto.nombre}" agregado a favoritos!`);
    const initialStateFavorites = () => {
        try {
            const localData = localStorage.getItem("favorites");
            if (!localData) return [];

            const parsedData = JSON.parse(localData);
            if (!parsedData || !parsedData.items) return [];

            const { items, timestamp } = parsedData;

            if (!Array.isArray(items)) return [];

            if (Date.now() - timestamp > EXPIRATION_TIME) {
                localStorage.removeItem("favorites");
                return [];
            }

            return items;
        } catch (error) {
            console.error("Error al leer favorites:", error);
            return [];
        }
    };


    const [favorites, setFavorites] = useState(initialStateFavorites);

    const addFavorite = (producto) => {
        if (favorites.some((pro) => pro.id === producto.id)) return;

        setFavorites([...favorites, producto]);
        notifyAdd(producto)
    };

    const deleteItem = (producto) => {
        const confirmDelete = window.confirm(`¿Seguro que deseas eliminar "${producto.nombre}" de tu lista de deseos?`);
        if (confirmDelete) {
            setFavorites(favorites.filter((p) => p.id !== producto.id));
        }
    };

    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem("favorites", JSON.stringify({
                items: favorites,
                timestamp: Date.now()
            }));
        }
    }, [favorites]);



    return { favorites, addFavorite, deleteItem };
};

export { useFavorites };
