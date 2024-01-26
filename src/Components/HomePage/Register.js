import React from 'react';
import { useState } from "react";
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
const Register = ({ switchView }) => {
    const [name, setName] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [secondLastName, setSecondLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [province, setProvince] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        // Realiza la petición POST al servidor para registrar al usuario
        const response = await axios.post('http://localhost/api/register', {
          name,
          firstLastName,
          secondLastName,
          phone,
          email,
          province,
        });
  
        // Si el registro es exitoso, puedes realizar acciones adicionales
        console.log('Usuario registrado:', response.data);
  
        // Después de realizar acciones, puedes cambiar la vista a login
        switchView('login');
      } catch (error) {
        console.error('Error de registro:', error);
        // Puedes manejar errores de registro aquí, por ejemplo, mostrar un mensaje al usuario
      }
    };
    return (
            <form onSubmit={handleRegister}>
                <h1 className="text-gray-800 font-bold text-2xl mb-1">Regístrate</h1>
                <p className="text-sm font-normal text-gray-600 mb-7">Por favor, completa el siguiente formulario...</p>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Nombre" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Primer Apellido" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Segundo Apellido" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4zM15 2a2 2 0 0 1 2 2M9 21h.01"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Teléfono" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Correo electrónico" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-12a8 8 0 1 1 16 0c0 7.5-8 12-8 12zm0 0V12"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Dirección" />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                        >
                            Registrarse
                        </button>
                    </div>
            </form>
    );
};

export default Register;
