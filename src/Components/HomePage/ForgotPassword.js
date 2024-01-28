import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ switchView }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            // Realizar la solicitud para enviar un correo de restablecimiento de contraseña
            const response = await axios.post('http://localhost:8000/api/forgot-password', {
                email,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error al solicitar restablecimiento de contraseña:', error);
        }
    };

    return (
            <form onSubmit={handleForgotPassword} action="#" method="post">
                <div className="mb-7">
                    <h3 className="font-semibold text-2xl text-gray-800">¿Olvidaste tu Contraseña?</h3>
                    <p className="text-gray-400">
                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                    </p>
                </div>
                <div className="space-y-6">
                    <div>
                        <input
                            id="emailInput"
                            placeholder="Correo"
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                    <button
                        type="submit" // Change 'submit' to 'button'
                        className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                        onClick={() => handleForgotPassword} // Trigger the form submission
                    >
                        Enviar Enlace de Restablecimiento
                    </button>
                    </div>
                </div>
            </form>
    );
};

export default ForgotPassword;
