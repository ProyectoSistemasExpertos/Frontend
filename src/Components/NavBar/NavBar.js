// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import { useAuth } from '../AuthContext/Authenticator';
import * as Yup from 'yup';

const NavBar = ({ onCategoryChange }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const { userData } = useAuth()

    const hoverStyle = {
        transition: 'color 0.3s',
    };

    
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            state: '',
            price: '',
            location: '',
            totalPossibleReservation: '',
            idPerson: '',
            idCategory: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Ingrese el título'),
            description: Yup.string().required('Ingrese la descripción'),
            state: Yup.string().required('Ingrese el estado'),
            price: Yup.string().required('Ingrese el precio'),
            location: Yup.string().required('Ingrese la ubicación'),
            totalPossibleReservation: Yup.string().required('Ingrese el total de reservaciones posibles'),
            idPerson: Yup.string().required('Ingrese el ID de la persona'),
            idCategory: Yup.string().required('Ingrese el ID de la categoría'),
        }),
        onSubmit: (values) => {
            console.log('Datos del formulario:', values);
            // Limpia los valores del formulario después de enviar
            formik.resetForm();
            closeModal(); // Cierra el modal después de enviar el formulario
        },
    });

    const closeModal = () => {
        setModalOpen(false);
        formik.resetForm();
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
                        <Link to="/view-user">Mike</Link>
                    </li>
                </ul>
            </nav>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white p-8 rounded-lg z-50">
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

                            <div className="mb-4">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-600">
                                    Estado:
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formik.values.state}
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
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese la ubicación"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.location && formik.errors.location ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.location && formik.errors.location && (
                                    <div className="text-red-500 text-sm">{formik.errors.location}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="totalPossibleReservation"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Total de Reservaciones Posibles:
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
                                <label htmlFor="idPerson" className="block text-sm font-medium text-gray-600">
                                    ID de la Persona:
                                </label>
                                <input
                                    type="number"
                                    id="idPerson"
                                    name="idPerson"
                                    value={formik.values.idPerson}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el ID de la persona"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.idPerson && formik.errors.idPerson ? 'border-red-500' : ''
                                        }`}
                                />
                                {formik.touched.idPerson && formik.errors.idPerson && (
                                    <div className="text-red-500 text-sm">{formik.errors.idPerson}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="idCategory" className="block text-sm font-medium text-gray-600">
                                    ID de la Categoría:
                                </label>
                                <input
                                    type="number"
                                    id="idCategory"
                                    name="idCategory"
                                    value={formik.values.idCategory}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Ingrese el ID de la categoría"
                                    className={`mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 ${formik.touched.idCategory && formik.errors.idCategory ? 'border-red-500' : ''
                                        }`}
                                />
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
