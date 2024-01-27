import React from 'react';
import { useState } from "react";
import { useAuth } from '../AuthContext/Authenticator';

const Register = ({ switchView }) => {
    const { register, successMessage } = useAuth(); //FUNCION DE REGISTRO

    const [name, setName] = useState('');
    const [idCard, setidCard] = useState('');
    const [firstLastName, setFirstLastName] = useState('');
    const [secondLastName, setSecondLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      await register(name,
          idCard,
          firstLastName,
          secondLastName,
          phone,
          address,
          email,
          password);
       
    };
    return (
            <form onSubmit={handleRegister}>
            <h1 className="text-gray-800 font-bold text-2xl">Regístrate</h1>
                <p className="text-sm font-normal text-gray-600 mb-1">Por favor, completa el siguiente formulario...</p>          
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={name} onChange={(e) => setName(e.target.value)} name="" id="" placeholder="Nombre" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={idCard} onChange={(e) => setidCard(e.target.value)} name="" id="" placeholder="Cedula" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={firstLastName} onChange={(e) => setFirstLastName(e.target.value)} name="" id="" placeholder="Primer Apellido" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} name="" id="" placeholder="Segundo Apellido" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4zM15 2a2 2 0 0 1 2 2M9 21h.01"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="" id="" placeholder="Teléfono" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="" id="" placeholder="Direccion" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder="Correo electrónico" />
                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-12a8 8 0 1 1 16 0c0 7.5-8 12-8 12zm0 0V12"></path>
                    </svg>
                    <input className="pl-2 outline-none border-none" type="text" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder="Contraseña" />
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
