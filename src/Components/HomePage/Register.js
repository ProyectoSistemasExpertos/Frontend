import React from 'react';
import { useState } from "react";
import { useAuth } from '../AuthContext/Authenticator';

const Register = ({ switchView }) => {
    const { register, successMessage } = useAuth(); //FUNCION DE REGISTRO

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idCard, setidCard] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [secondLastName, setSecondLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [idCategory, setCategory] = useState('');
    const [idRol, setIdRol] = useState(2);

    const handleRegister = async (e) => {
        e.preventDefault();

        await register(name, email, password, idCard, firstLastName, secondLastName, phone, address, idCategory, idRol);

    };
    return (
        <form onSubmit={handleRegister} className="max-w-md mx-auto">
            <h1 className="text-gray-800 font-bold text-xl">Regístrate</h1>
            <p className="text-xs font-bold text-gray-600 mb-3">Por favor, completa el siguiente formulario...</p>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {/* Fila 1: Nombre y Cedula */}
                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
                </div>

                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 15a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v3a4 4 0 01-4 4m-4 6a6 6 0 01-6-6V8a6 6 0 016-6h8a6 6 0 016 6v3a6 6 0 01-6 6"></path>
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={idCard} onChange={(e) => setidCard(e.target.value)} placeholder="Cedula" />
                </div>
                {/* Fin de Fila 1 */}

                {/* Fila 2: Primer Apellido y Segundo Apellido */}
                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={firstLastName} onChange={(e) => setFirstLastName(e.target.value)} placeholder="Primer Apellido" />
                </div>

                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} placeholder="Segundo Apellido" />
                </div>
                {/* Fin de Fila 2 */}

                {/* Resto de los campos */}
                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4zM15 2a2 2 0 0 1 2 2M9 21h.01"></path>
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" />
                </div>

                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-12a8 8 0 1 1 16 0c0 7.5-8 12-8 12zm0 0V12"></path>
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Direccion" />
                </div>

                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
                </div>

                <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 2a2 2 0 110 4 2 2 0 010-4zm0 5a2 2 0 100 4 2 2 0 000-4zm-7.485-7.485a9 9 0 0112.97-2.515M22 12h-2m2 0h-2m2 0h-2m-8-2a4 4 0 110 8 4 4 0 010-8z"></path>
                    </svg>
                    <input className="pl-2 text-xs w-full focus:outline-none" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                </div>
                {/* Fin de Resto de los campos */}
            </div>

            <div className="flex items-center border-2 py-2 px-1 rounded-lg mb-2">
                <select
                    className="pl-2 font-bold text-xs w-full focus:outline-none"
                    value={idCategory}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Selecciona tu preferencia de viajes</option>
                    <option value="1">Montañas</option>
                    <option value="2">Playas</option>
                    <option value="3">Ciudades</option>

                </select>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-2 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                    Registrarse
                </button>
            </div>
        </form>
    );
};

export default Register;
