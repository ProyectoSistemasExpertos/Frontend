import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const endpoint = "http://127.0.0.1:8000/api";
const ShowBookings = () => {

    // Estrellas por valoración
    const renderStars = (rating) => {
        const totalStars = 5;
        const roundedRating = Math.round(rating * 2) / 2; // Redondear a la mitad más cercana

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < roundedRating) {
                stars.push('★'); // Estrella completa
            } else if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
                stars.push('☆'); // Estrella media
            } else {
                stars.push('☆'); // Estrella vacía
            }
        }

        return stars.join(' ');
    };
    // Para cambiar los colores del background como lo solicita el profe
    const backgroundColor = (someCondition) => {
        if (someCondition == 1) {
            return 'bg-red-300'; // Color rojo
        } else if (someCondition == 2) {
            return 'bg-blue-300'; // Color azul
        } else {
            return 'bg-green-300'; // Color verde
        }
    };
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${endpoint}/booking`);
                setBookings(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    /*const deleteBooking = async () => {
       await axios.delete(`${endpoint}/booking/${id}`)
       getBookings()
    }*/
    return (
        <>
            <section className={`p-6 w-full mb-32 bg-white`}>
                {bookings.map((booking) => (
                    <div className="mb-16 flex flex-wrap">
                        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                            <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                                <img src={booking.image} className="w-full" alt="" />
                                <a href="#!">
                                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                        aasfdadsf la imagen trollos
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                            <h3 className="mb-4 text-2xl font-bold">{booking.tittle}</h3>
                            <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                </svg>
                                {booking.typeCategory}
                            </div>
                            <p className="mb-6 text-sm text-neutral-500 dark:text-black">
                                Publicado el: <u>{booking.uploadDate}</u> por
                                <a href="#!"> {booking.name} {booking.firstLastName} {booking.secondLastName}, ubicado en {booking.address}</a>
                            </p>
                            <p className="mb-6 text-black dark:text-black">
                                {booking.description}. <br>
                                </br>Con un precio de: {booking.price} <br></br>
                                Posee un total de {booking.totalPossibleReservation} habitaciones <br></br>
                                Llamar al {booking.phone}
                            </p>
                            <div className="col-span-1 relative">
                                <button className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 md:bottom-6 md:right-8 lg:bottom-8 lg:right-10 xl:bottom-10 xl:right-12 bg-green-500 text-white p-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500">
                                    ¿Reservar?
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default ShowBookings
