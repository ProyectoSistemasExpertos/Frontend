import React from 'react';
import Carousel from '../Carousel/Carousel';
const Register = () => {
    return (
            <div className="h-screen flex bg-gradient-to-tr from-blue-800 to-purple-700">
                <Carousel />
            <div className="flex items-center justify-center flex-grow p-4 bg-white rounded-3xl">
                <form className="bg-white w-80">
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
                    <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">Seleccione su provincia de residencia<abbr title="required"></abbr></label>
                        <select className="flex items-center border-2 py-2 px-3 rounded-2xl" required="required" name="provincia[id]" id="idProvincia">
                            <option value="">Seleccionar...</option>
                            <option value="">San José</option>
                            <option value="">Heredia</option>
                            <option value="">Alajuela</option>
                            <option value="">Cartago</option>
                            <option value="">Limón</option>
                            <option value="">Puntarenas</option>
                            <option value="">Guanacaste</option>
                        </select>
                        <p className="text-sm text-red-500 hidden mt-3" id="error">Por favor, completa el campo.</p>
                    </div>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Ingresar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
