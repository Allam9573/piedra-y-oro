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
import { useFavorites } from "./hooks/useFavorites"
import { Favorites } from "./components/Favorites"
import { ProductoEliminar } from "./components/productos/ProductoEliminar"
import { useCart } from "./hooks/useCart"
import { NuevaVenta } from "./components/ventas/NuevaVenta"
import './assets/css/whatsapp-icon.css'
import { Placeholder } from "./pages/Placeholder"
import { FAQ } from "./pages/FAQ"
import { ToastContainer } from "react-toastify";
import { Promocion } from "./components/promociones/Promocion"
// import { Prom } from "./components/Prom"
// import '../src/assets/css/card.css'
const App = () => {

  const { favorites, addFavorite, deleteItem } = useFavorites()
  const { addToCart, cart, eliminarItemCarrito, incrementar, decrementar } = useCart()

  return (
    <BrowserRouter>
      <Navbar quantity={cart.length} quantityFavorites={favorites.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:nombre" element={<CategoriaProducto />} />
        <Route path="/promociones/:id" element={<Promocion />} />
        <Route path="/productos" element={<ProductosPage cart={cart} addToCart={addToCart} addFavorite={addFavorite} />} />
        <Route path="/productos/:id" element={<ProductoView addToCart={addToCart} />} />
        <Route path="/admin/productos/eliminar/:id" element={<ProductoEliminar />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        {/* <Route path="/prom" element={<Prom />} /> */}
        <Route
          path="/my-cart"
          element={<Cart cart={cart} eliminarItemCarrito={eliminarItemCarrito} incrementar={incrementar} decrementar={decrementar} />} />
        <Route path="/my-favorites" element={<Favorites favorites={favorites} deleteItem={deleteItem} addToCart={addToCart} />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
      <a href="https://wa.me/+50499999999" target="_blank" class="whatsapp-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
