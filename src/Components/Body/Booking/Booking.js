import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ShowBookings from "./BodyBooking/ShowBookings";

const endpoint = "http://127.0.0.1:8000/api";
const Booking = () => {
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
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    /*const deleteBooking = async () => {
       await axios.delete(`${endpoint}/booking/${id}`)
       getBookings()
    }*/
    return (
        <section className={`p-6 w-full mb-32 bg-white`}>
            {bookings && bookings.length ? (
                <>
                {bookings.map((booking) => (
                    <ShowBookings
                    key={booking.id}
                    booking={booking}
                    setBooking={setBookings}
                    />
                ))}
                </>
            ): (
                <>
                <h2 className='font-balck text-3xl text-center'>Aun no se han registrado lugares para reservar</h2>
                </>
            )}
        </section>
    )
}

export default Booking;

