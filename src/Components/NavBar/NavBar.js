// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to="/history-preference">Historial de Preferencias</Link>
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    <Link to="/user-history">Historial de Reservaciones</Link>
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }}
                    className="hover:text-blue-300 mb-2">
                    Crear un Nuevo Destino
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }}
                    className="hover:text-blue-300 mb-2">
                    <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem' }}/>  
                       <Link to="/view-user">Mike</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
