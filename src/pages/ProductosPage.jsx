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
    console.log(productos)
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const categoriaSeleccionada = params.get("categoria");

    const notify = () => toast("Wow so easy!");
    console.log(productos)

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
                                <div key={producto.id} className="col-md-4">
                                    <div className="card mb-4 product-wap rounded-0">
                                        <div className="card rounded-0">
                                            <img
                                                className="card-img rounded-0 img-fluid"
                                                style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                                src={producto.imagenes.length > 0 ? producto.imagenes[0].imagen : "placeholder.jpg"}
                                                alt={producto.nombre}
                                            />

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
                                            {
                                                producto.campana_titulo === 'Sin promocion' ?
                                                    <>

                                                    </> :
                                                    <>
                                                        <div className='d-flex justify-content-between'>
                                                            <h3 className="text-decoration-none">{producto.nombre}</h3>
                                                            <h6><span class="badge bg-danger p-2">En promocion</span></h6>
                                                        </div>
                                                    </>
                                            }
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
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2>Sin resultados</h2>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
