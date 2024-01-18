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
        <div className={`rounded shadow-xl p-6 w-full ${backgroundColor(3)}`}>
            {bookings.map((booking) => (
                <div key={booking.idBooking} className="flex flex-col mb-6 bg-white rounded shadow-xl p-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">Acá va la imagen</div>
                        <div className="col-span-1">
                            <p><strong>Descripción:</strong> {booking.description}</p>
                            <p><strong>Estado:</strong> {booking.state === 0 ? 'No disponible' : 'Disponible'}</p>
                            <p><strong>Precio:</strong> {booking.price}</p>
                            <p><strong>Locación:</strong> {booking.location}</p>
                            <p><strong>Nombre de la Persona:</strong> {`${booking.namePerson} ${booking.firstLastNamePerson} ${booking.secondLastNamePerson}`}</p>
                            <p><strong>Correo Electrónico:</strong> {booking.personEmail}</p>
                            <p><strong>Teléfono:</strong> {booking.personPhone}</p>
                        </div>
                        <div className="col-span-1 relative">
                            <span className="text-yellow-500 text-3xl absolute top-0 left-0 mt-2 ml-2">
                                {renderStars(3.5)}
                            </span>

                            <button className="absolute bottom-4 right-4 bg-green-500 text-white p-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500">
                                Ver más
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowBookings
