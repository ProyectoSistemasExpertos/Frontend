// NavBar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { useAuth } from '../AuthContext/Authenticator';
import axios from 'axios';
import * as Yup from 'yup';

const endpoint = "http://127.0.0.1:8000/api";

const NavBar = ({ onCategoryChange }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [categorys, setCategorys] = useState([]);

    const [idBooking, setIdBooking] = useState('');
    const [typeCategory, setTypeCategory] = useState('');

    const openModal = () => setModalOpen(true);
    const { userData } = useAuth()

    const hoverStyle = {
        transition: 'color 0.3s',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const getCategory = await axios.get(`${endpoint}/category`);
                setCategorys(getCategory.data); // Suponiendo que setCategorys es una función para establecer las categorías en tu estado
                // Mapeo del objeto getCategory.data
                getCategory.data.forEach(category => {
                    const { idCategory, typeCategory } = category;
                    // Aquí puedes hacer lo que necesites con idBooking y typeCategory
                });
            } catch (error) {
                console.error("Error category ", error);
            }
        };
        fetchData();
    }, []);
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            state:'',
            price: '',
            location: '',
            totalPossibleReservation: '',
            idPerson: '',
            idCategory: '',
        },
     
        validationSchema: Yup.object({
            title: Yup.string().required('Ingrese el título'),
            description: Yup.string().required('Ingrese la descripción'),
            price: Yup.string().required('Ingrese el precio'),
            location: Yup.string().required('Ingrese la ubicación'),
            totalPossibleReservation: Yup.string().required('Ingrese el total de reservaciones posibles'),
            idPerson: Yup.string().required('Ingrese el id'),
            idCategory: Yup.string().required('Ingrese el ID de la categoría'),
        }),
        onSubmit: async (values)  => {
            console.log('Datos del formulario:', values);

            try {
                const response = await axios.post(`${endpoint}/booking/create`, values);
                console.log(response.data); // Maneja la respuesta de la API según tus necesidades
                formik.resetForm();
                closeModal(); // Cierra el modal después de enviar el formulario
            } catch (error) {
                console.error('Error al enviar los datos a la API:', error);
                // Maneja el error según tus necesidades
            }
        },
    });

 

    const closeModal = () => {
        setModalOpen(false);
        formik.resetForm();
        console.log(userData);
    };
    return (
        <>
            <nav className="bg-white-600 p-4 text-black w-full rounded-b-lg">
                <ul className="flex flex-wrap justify-end">
                    <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                        <Link to="/booking" onClick={() => onCategoryChange(0)}>Inicio</Link>
                    </li>
                    <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                        <Link to="/history-preference">Historial de Preferencias</Link>
                    </li>
                    <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                        <Link to="/user-history">Historial de Reservaciones</Link>
                    </li>
                    <li style={{ ...hoverStyle, marginRight: '1.5rem' }}
                        className="hover:text-blue-300 mb-2"
                        onClick={openModal}>
                        Crear un Nuevo Destino
                    </li>
                    <li style={{ ...hoverStyle, marginRight: '1.5rem' }}
                        className="hover:text-blue-300 mb-2">
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }} />
                        <Link to="/view-user">{userData.name}</Link>
                    </li>
                </ul>
            </nav>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-8 rounded-lg z-50 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-center">Registrar un Nuevo Destino</h2>

                        {/* Formulario */}
                        <form onSubmit={formik.handleSubmit} className="text-left">
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                                    Título:
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el título"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.title && formik.errors.title && (
                                    <div className="text-red-500 text-sm">{formik.errors.title}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                                    Descripción:
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese la descripción"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                                        }`}
                                ></textarea>
                                {formik.touched.description && formik.errors.description && (
                                    <div className="text-red-500 text-sm">{formik.errors.description}</div>
                                )}
                            </div>

                            <div className="mb-4" style={{ display: 'none' }}> {/* Aplica display: none para ocultar el div */}
                                <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                                    Estado:
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formik.values.state  = true}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el estado"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.state && formik.errors.state ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.state && formik.errors.state && (
                                    <div className="text-red-500 text-sm">{formik.errors.state}</div>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                                    Precio:
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el precio"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.price && formik.errors.price ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.price && formik.errors.price && (
                                    <div className="text-red-500 text-sm">{formik.errors.price}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                                    Ubicación:
                                </label>
                                <select
                                    id="location"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.location && formik.errors.location ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Seleccione una provincia</option>
                                    <option value="San Jose">San José</option>
                                    <option value="Alajuela">Alajuela</option>
                                    <option value="Cartago">Cartago</option>
                                    <option value="Heredia">Heredia</option>
                                    <option value="Guanacaste">Guanacaste</option>
                                    <option value="Puntarenas">Puntarenas</option>
                                    <option value="Limon">Limón</option>
                                </select>
                                {formik.touched.location && formik.errors.location && (
                                    <div className="text-red-500 text-sm">{formik.errors.location}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="totalPossibleReservation"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Cantidad de personas posibles en el alojamiento:
                                </label>
                                <input
                                    type="number"
                                    id="totalPossibleReservation"
                                    name="totalPossibleReservation"
                                    value={formik.values.totalPossibleReservation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el total de reservaciones posibles"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.totalPossibleReservation &&
                                        formik.errors.totalPossibleReservation
                                        ? 'border-red-500'
                                        : ''
                                        }`}
                                />
                                {formik.touched.totalPossibleReservation &&
                                    formik.errors.totalPossibleReservation && (
                                        <div className="text-red-500 text-sm">
                                            {formik.errors.totalPossibleReservation}
                                        </div>
                                    )}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="number"
                                    id="idPerson"
                                    name="idPerson"
                                    value={formik.values.idPerson = userData.id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el ID de la persona"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.idPerson && formik.errors.idPerson ? 'border-red-500' : ''
                                        }`}
                                        style={{ display: 'none' }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="idCategory" className="block text-sm font-medium text-gray-600">
                                    Categoría:
                                </label>
                                <select
                                    id="idCategory"
                                    name="idCategory"
                                    value={formik.values.idCategory}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.idCategory && formik.errors.idCategory ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Seleccione una categoría</option>
                                    {categorys.map(category => (
                                        <option key={category.idCategory} value={category.idCategory}>
                                            {category.typeCategory}
                                        </option>
                                    ))}
                                </select>
                                {formik.touched.idCategory && formik.errors.idCategory && (
                                    <div className="text-red-500 text-sm">{formik.errors.idCategory}</div>
                                )}
                            </div>


                            <div className="mb-4">
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded-full">
                                    Crear Destino
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="ml-2 p-2 bg-red-500 text-white rounded-full"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
