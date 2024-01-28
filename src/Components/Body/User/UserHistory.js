import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import ShowBookingsHistory from '../Booking/BodyBooking/ShowBookingsHistory';
import { useAuth } from '../../AuthContext/Authenticator';

const endpoint = "http://127.0.0.1:8000/api";

export default function UserHistory() {
    const { userData } = useAuth()
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${endpoint}/housing/history_by_user/${userData.idCard}`);
                setBookings(response.data);

            } catch (error) {
                if (error.response) {
                    // El servidor respondió con un estado diferente de 2xx
                    console.error("Error de respuesta del servidor:", error.response.data);
                } else if (error.request) {
                    // La solicitud se hizo pero no se recibió respuesta
                    console.error("No se recibió respuesta del servidor:", error.request);
                } else {
                    // Algo más causó un error
                    console.error("Error desconocido:", error.message);
                }
            }
        }

        fetchData(); // Llamamos a fetchDataB aquí

    }, []);
    return (
        <div>
            <section className={`p-6 w-full mb-32 bg-white`}>
                {bookings.map((booking) => (
                    <ShowBookingsHistory
                    key={booking.id}
                        booking={booking}
                        setBooking={setBookings}
                    />
                ))}

            </section>
        </div>
    )
}
