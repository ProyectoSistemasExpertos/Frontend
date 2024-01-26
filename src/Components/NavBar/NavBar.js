// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ onCategoryChange }) => {
    const hoverStyle = {
        transition: 'color 0.3s',
    };

    return (
        <nav className="bg-white-600 p-4 text-black w-full rounded-b-lg">
            <ul className="flex flex-wrap justify-end">
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    <Link to="/" onClick={() => onCategoryChange(0)}>Inicio</Link>
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    <Link to="/historial-preferencias">Historial de Preferencias</Link>
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    <Link to="/historial-reservaciones">Historial de Reservaciones</Link>
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }}
                    className="hover:text-blue-300 mb-2">
                    Crear un Nuevo Destino
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
