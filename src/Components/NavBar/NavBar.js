// NavBar.js
import React from 'react';
import Sidebar from '../SideBar/SideBar';

const NavBar = () => {
    const hoverStyle = {
        transition: 'color 0.3s',
    };

    return (
        <nav className="bg-white-600 p-4 text-black w-full rounded-b-lg">
            <ul className="flex flex-wrap justify-end">
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    Historial de Preferencias
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    Historial de reservaciones
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    Agregar nuevo lugar de reserva
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300 mb-2">
                    Opcion 4
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
