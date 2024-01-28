import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState, useEffect } from "react";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    initial_date: Yup.date().required('Fecha de inicio es requerida'),
    final_date: Yup.date().required('Fecha final es requerida'),
    arrival_date: Yup.date().required('Fecha de llegada es requerida'),
    total_person: Yup.number().required('Número total de personas es requerido'),
    idPerson: Yup.string().required('ID de la persona es requerido'),
    idBooking: Yup.string().required('ID de la reserva es requerido'),
});

const ShowBookings = ({ booking, setBooking }) => {
    const { idBooking, tittle, description, price, state, location, totalPossibleReservation,
        uploadDate, image, name, email, firstLastName, secondLastName, phone, address, typeCategory } = booking;
    const [isModalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleFormSubmit = (values, actions) => {
        console.log('Datos del formulario:', values);
        actions.resetForm(); // Limpia los valores del formulario después de enviar
        closeModal();
    };

    return (
        <>
            <div className="mb-16 flex flex-wrap">
                <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                    <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                        <img src={image} className="w-full" alt="" />
                        <a href="#!">
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                aasfdadsf la imagen trollos
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                    <h3 className="mb-4 text-2xl font-bold">{tittle}</h3>
                    <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                        </svg>
                        {typeCategory}
                    </div>
                    <p className="mb-6 text-sm text-neutral-500 dark:text-black">
                        Publicado el: <u>{uploadDate}</u> por
                        <a href="#!"> {name} {firstLastName} {secondLastName}, ubicado en {location}</a>
                    </p>
                    <p className="mb-6 text-black dark:text-black">
                        {description}. <br>
                        </br>Con un precio de: {price} <br></br>
                        Posee un total de {totalPossibleReservation} habitaciones <br></br>
                        Contáctanos al: {phone} <br></br>
                        O al Correo: {email}
                    </p>
                    <div className="col-span-1 relative">
                        <div className="col-span-1 relative">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 md:bottom-6 md:right-8 lg:bottom-8 lg:right-10 xl:bottom-10 xl:right-12 bg-green-500 text-white p-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500"
                            >
                                ¿Reservar?
                            </button>
                        </div>

                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center">
                                <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
                                <div className="bg-white p-8 rounded-lg z-50">
                                <h2 className="text-2xl font-bold mb-4 text-center">Registrar una nueva Reservación</h2>

                                    {/* Formik Form */}
                                    <Formik
                                        initialValues={{
                                            initial_date: '',
                                            final_date: '',
                                            arrival_date: '',
                                            total_person: '',
                                            idPerson: '',
                                            idBooking: '',
                                        }}
                                        validationSchema={validationSchema}
                                        onSubmit={handleFormSubmit}
                                    >
                                        <Form className="text-left">
                                            <div className="mb-4">
                                                <label htmlFor="initial_date" className="block text-sm font-medium text-gray-600">
                                                    Fecha de inicio:
                                                </label>
                                                <Field
                                                    type="date"
                                                    id="initial_date"
                                                    name="initial_date"
                                                    placeholder="Selecciona la fecha de inicio"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="initial_date" component="div" className="text-red-500 text-xs mt-1 italic" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="final_date" className="block text-sm font-medium text-gray-600">
                                                    Fecha final:
                                                </label>
                                                <Field
                                                    type="date"
                                                    id="final_date"
                                                    name="final_date"
                                                    placeholder="Selecciona la fecha final"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="final_date" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="arrival_hour" className="block text-sm font-medium text-gray-600">
                                                    Hora de llegada:
                                                </label>
                                                <Field
                                                    type="time"
                                                    id="arrival_hour"
                                                    name="arrival_hour"
                                                    placeholder="Selecciona la hora de llegada"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="arrival_hour" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="total_person" className="block text-sm font-medium text-gray-600">
                                                    Número total de personas:
                                                </label>
                                                <Field
                                                    type="number"
                                                    id="total_person"
                                                    name="total_person"
                                                    placeholder="Ingrese el número de personas"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="total_person" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="idPerson" className="block text-sm font-medium text-gray-600">
                                                    ID de la persona:
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="idPerson"
                                                    name="idPerson"
                                                    placeholder="Ingrese el ID de la persona"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="idPerson" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="idBooking" className="block text-sm font-medium text-gray-600">
                                                    ID de la reserva:
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="idBooking"
                                                    name="idBooking"
                                                    placeholder="Ingrese el ID de la reserva"
                                                    className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                                                />
                                                <ErrorMessage name="idBooking" component="div" className="text-red-500 text-sm" />
                                            </div>

                                            <div className="mb-4">
                                                <button type="submit" className="bg-blue-500 text-white p-2 rounded-full">
                                                    Reservar
                                                </button>
                                                <button type="button" onClick={closeModal} className="ml-2 p-2 bg-red-500 text-white rounded-full">
                                                    Cancelar
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ShowBookings
