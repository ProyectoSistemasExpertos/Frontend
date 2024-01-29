import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowBookings from "./BodyBooking/ShowBookings";

const endpoint = "http://127.0.0.1:8000/api";
const Booking = ({ selectedCategory }) => {

    const [bookings, setBookings] = useState([]);
    const [filterBookings, setfilterBookings] = useState([]);

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

    useEffect(() => {
        const fetchDataB = async () => {
            try {
                const num = selectedCategory && Number(selectedCategory.selectedCategory);
                if (num != 0 && num != null) {
                    console.log(`${endpoint}/booking/filter_category/${num}`);
                    const response = await axios.get(`${endpoint}/booking/filter_category/${num}`);                    
                    setfilterBookings(response.data);
                } else if(num == 0 || num == null) {
                    const response = await axios.get(`${endpoint}/booking`);
                    setBookings(response.data);
                }
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

        fetchDataB(); // Llamamos a fetchDataB aquí

    }, [selectedCategory]);

    /*const deleteBooking = async () => {
       await axios.delete(`${endpoint}/booking/${id}`)
       getBookings()
    }*/
    return (
        <section className={`p-6 w-full mb-32 bg-white`}>
           {filterBookings.length ? (
    <>
        {filterBookings.map((filterBooking, index) => (
            <ShowBookings
                key={index}
                booking={filterBooking}
                setBooking={setfilterBookings}
            />
        ))}
    </>
) : (
    <>
        {bookings && bookings.length ? (
            <>
                {bookings.map((booking,index) => (
                    <ShowBookings
                        key={index}
                        booking={booking}
                        setBooking={setBookings}
                    />
                ))}
            </>
        ) : (
            <>
                <h2 className="font-black text-3xl text-center">
                    Aun no se han registrado lugares para reservar
                </h2>
            </>
        )}
    </>
            )}
        </section>
    )
}

export default Booking;

