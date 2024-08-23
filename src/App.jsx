import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { Home } from "./pages/Home"
import { Admin } from "./pages/Admin"
import { ProductosPage } from "./pages/ProductosPage"
import { AboutPage } from "./pages/AboutPage"


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
