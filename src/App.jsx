import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Admin } from "./pages/Admin"
import { ProductosPage } from "./pages/ProductosPage"
import { AboutPage } from "./pages/AboutPage"
import { ProductoView } from "./components/productos/ProductoView"
import { EliminarCategoria } from "./components/categorias/EliminarCategoria"
import { Categorias } from "./pages/Categorias"
import { Error404 } from "./pages/Error404"
import { CategoriasEliminadas } from "./components/categorias/eliminadas/CategoriasEliminadas"
import { RestaurarCategoria } from "./components/categorias/eliminadas/RestaurarCategoria"
import { Productos } from "./pages/Productos"
import { Footer } from "./components/footer/Footer"
import { Navbar } from "./components/Navbar"
import { NuevoProducto } from "./components/productos/NuevoProducto"
import { CategoriaProducto } from "./components/categorias/CategoriaProducto"
import { Cart } from "./components/cart/Cart"
import { useEffect, useState } from "react"
import { useFavorites } from "./hooks/useFavorites"
import { Favorites } from "./components/Favorites"

const App = () => {

  const { favorites, addFavorite, deleteItem } = useFavorites()

  const initialState = () => {
    try {
      const localStorageCart = localStorage.getItem('cart')
      return localStorageCart ? JSON.parse(localStorageCart) : []
    } catch (error) {
      return []
    }
  }

  const [cart, setCart] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = producto => {
    const buscar = cart.findIndex(pro => pro.id === producto.id)
    if (buscar >= 0) {
      producto.cantidad += 1
    } else {
      producto.cantidad = 1
      setCart([...cart, producto])
    }
  }
  const eliminarItemCarrito = nombreProducto => {
    const confirmDelete = window.confirm(`¿Estás seguro de que quieres eliminar el producto "${nombreProducto}"?`);
    if (confirmDelete) {
      const updateCart = cart.filter(productos => productos.nombre !== nombreProducto)
      setCart(updateCart)
    }
  }
  return (
    <BrowserRouter>
      <Navbar quantity={cart.length} quantityFavorites={favorites.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:nombre" element={<CategoriaProducto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/categorias" element={<Categorias />} />
        <Route path="/admin/productos" element={<Productos />} />
        <Route path="/admin/productos/nuevo-producto" element={<NuevoProducto />} />
        <Route path="/admin/eliminar-categoria/:id" element={<EliminarCategoria />} />
        <Route path="/admin/categorias/eliminadas" element={<CategoriasEliminadas />} />
        <Route path="/admin/categorias/restaurar/:id" element={<RestaurarCategoria />} />
        <Route path="/productos" element={<ProductosPage cart={cart} addToCart={addToCart} addFavorite={addFavorite} />} />
        <Route path="/productos/:id" element={<ProductoView addToCart={addToCart} />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/my-cart" element={<Cart cart={cart} eliminarItemCarrito={eliminarItemCarrito} />} />
        <Route path="/my-favorites" element={<Favorites favorites={favorites} deleteItem={deleteItem} addToCart={addToCart} />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
