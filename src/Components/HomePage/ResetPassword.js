import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = ({ switchView }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log('Error al restablecer la contraseña:');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            // Realizar la solicitud para restablecer la contraseña
            const token = window.location.search.split('=')[1]; // Obtener el token de la URL
            const response = await axios.post(`http://localhost:8000/api/reset-password?token=${token}`, {
                password: password,
                password_confirmation: confirmPassword,
            });
            
            console.log(response.data);
        } catch (error) {
            console.error('Error al restablecer la contraseña:', error);
        }
    };

    return (
            <form onSubmit={handleResetPassword}>
                <div className="mb-7">
                    <h3 className="font-semibold text-2xl text-gray-800">Restablecer Contraseña</h3>
                    <p className="text-gray-400">
                        Ingresa tu nueva contraseña.
                    </p>
                </div>
                <div className="space-y-6">
                    <div>
                        <input
                            id="passwordInput"
                            placeholder="Nueva Contraseña"
                            type="password"
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="confirmPasswordInput"
                            placeholder="Confirmar Contraseña"
                            type="password"
                            className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                            onClick={() => switchView('login')}
                            >
                            Restablecer Contraseña
                        </button>
                    </div>
                </div>
            </form>
    );
};

export default ResetPassword;
