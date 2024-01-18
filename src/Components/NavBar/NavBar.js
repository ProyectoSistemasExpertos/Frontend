// NavBar.js
import React from 'react';

const NavBar = () => {
    const hoverStyle = {
        transition: 'color 0.3s',
    };

    return (
        <nav className="bg-orange-500 p-4 text-black w-full">
            {/* Contenido del navbar */}
            <ul className="flex flex-row-reverse">
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300">
                    Opcion 1
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300">
                    Opcion 2
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300">
                    Opcion 3
                </li>
                <li style={{ ...hoverStyle, marginRight: '1.5rem' }} className="hover:text-blue-300">
                    Opcion 4
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
