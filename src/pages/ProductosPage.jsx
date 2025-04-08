import React, { useEffect, useState } from 'react';
import { useProductos } from '../hooks/useProductos';
import { useSubcategorias } from '../hooks/useSubcategorias';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MdAddShoppingCart, MdFavoriteBorder } from 'react-icons/md';
import { GrView } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';

export const ProductosPage = ({ addToCart, addFavorite }) => {
    document.title = 'Lionettas | Productos';

    const [busqueda, setBusqueda] = useState('');
    const [subcategoriasSeleccionadas, setSubcategoriasSeleccionadas] = useState([]);
    const { productos } = useProductos();
    const { subcategorias } = useSubcategorias();
    const { pathname } = useLocation()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoriaSeleccionada = params.get("categoria");

    const notify = () => toast("Wow so easy!");

    // Aplicar filtro automáticamente al cargar
    useEffect(() => {
        if (categoriaSeleccionada) {
            setSubcategoriasSeleccionadas([categoriaSeleccionada]);
        }
        scrollTo(0, 0)
    }, [categoriaSeleccionada, pathname]);

    const handleSubcategoriaChange = (nombreSubcategoria) => {
        setSubcategoriasSeleccionadas((prevSeleccionadas) =>
            prevSeleccionadas.includes(nombreSubcategoria)
                ? prevSeleccionadas.filter((nombre) => nombre !== nombreSubcategoria)
                : [...prevSeleccionadas, nombreSubcategoria]
        );
    };

    const resultados = productos.filter((producto) => {
        const coincideBusqueda = producto.nombre
            .toLowerCase()
            .includes(busqueda.trim().toLowerCase());
        const coincideSubcategoria =
            subcategoriasSeleccionadas.length === 0 ||
            subcategoriasSeleccionadas.includes(producto.subcategoria_nombre);
        return coincideBusqueda && coincideSubcategoria;
    });

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categorias</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        {subcategorias.map(({ id, nombre }) => (
                            <li key={id} className="pb-3">
                                <input
                                    type="checkbox"
                                    id={`subcategoria-${id}`}
                                    onChange={() => handleSubcategoriaChange(nombre)}
                                    checked={subcategoriasSeleccionadas.includes(nombre)}
                                />
                                <label htmlFor={`subcategoria-${id}`} className="ms-2">
                                    {nombre}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-6 pb-4">
                            <input
                                type="search"
                                placeholder="Buscar un producto..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row">
                        {resultados.length > 0 ? (
                            resultados.map(producto => (
                                <>
                                    {
                                        producto.campana_titulo === 'Sin promocion' ?
                                            <>
                                                <div key={producto.id} className="col-md-4">
                                                    <div className="card mb-4 product-wap rounded-0" style={{ height: '380px' }}>
                                                        <div className="card rounded-0">
                                                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                                                <img
                                                                    className="card-img-top img-fluid" // Usar card-img-top si estás usando Bootstrap Cards
                                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ajustar height al 100% del contenedor
                                                                    src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : "placeholder.jpg"}
                                                                    alt={producto.nombre}
                                                                />
                                                            </div>

                                                            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <a style={{ backgroundColor: '#938E87' }} onClick={() => addFavorite(producto)} className="btn text-white">
                                                                            <MdFavoriteBorder />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <Link style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2" to={`/productos/${producto.id}`}>
                                                                            <GrView />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => addToCart(producto)} style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2">
                                                                            <MdAddShoppingCart />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className='text-secondary'>{producto.nombre}</h4>
                                                            <span style={{ backgroundColor: '#938E87' }} className='badge'>{producto.subcategoria_nombre}</span>
                                                            <p className="text-center mb-0">
                                                                Precio: <span className="fw-bold">{producto.precio}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> :
                                            // aplica promocion
                                            <>
                                                <div key={producto.id} className="col-md-4">
                                                    <div className="card rounded-bottom mb-4 product-wap">
                                                        <div className="card">
                                                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                                                <img
                                                                    className="card-img-top img-fluid" // Usar card-img-top si estás usando Bootstrap Cards
                                                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Ajustar height al 100% del contenedor
                                                                    src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : "placeholder.jpg"}
                                                                    alt={producto.nombre}
                                                                />
                                                            </div>

                                                            <div className="card-img-overlay product-overlay d-flex align-items-center justify-content-center">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <a style={{ backgroundColor: '#938E87' }} onClick={() => addFavorite(producto)} className="btn text-white">
                                                                            <MdFavoriteBorder />
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <Link style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2" to={`/productos/${producto.id}`}>
                                                                            <GrView />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <a onClick={() => addToCart(producto)} style={{ backgroundColor: '#938E87' }} className="btn text-white mt-2">
                                                                            <MdAddShoppingCart />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className='text-secondary'>{producto.nombre}</h4>
                                                            <span style={{ backgroundColor: '#938E87' }} className='badge'>{producto.subcategoria_nombre}</span>
                                                            <p className="text-center mb-0">
                                                                Precio Normal: <span className="text-decoration-line-through text-secondary"> {new Intl.NumberFormat('es-HN', {
                                                                    style: 'currency',
                                                                    currency: 'HNL',
                                                                    minimumFractionDigits: 2,
                                                                }).format(producto.precio)}</span>
                                                            </p>
                                                            <p className="text-center mb-0">
                                                                Precio Oferta: <span className="fw-bold"> {new Intl.NumberFormat('es-HN', {
                                                                    style: 'currency',
                                                                    currency: 'HNL',
                                                                    minimumFractionDigits: 2,
                                                                }).format(producto.precio - (producto.precio * (producto.campana_descuento) / 100))}</span>
                                                            </p>

                                                        </div>
                                                        <div style={{ backgroundColor: '#938E87' }} className="text-white bg-danger rounded-bottom text-center"> 🔥- {producto.campana_descuento}% Descuento!</div>
                                                    </div>

                                                </div>
                                            </>
                                    }
                                </>
                            ))
                        ) : (

                            <>
                                <div className="d-flex">

                                    <div class="spinner-border text-secondary me-3" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <h3 className='text-secondary'>Cargando productos...</h3>
                                </div>
                            </>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
