import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });

            const authToken = response.data.access_token;
            setToken(authToken);
            setIsAuthenticated(true);
        } catch (error) {
            setToken('');
            setIsAuthenticated(false);
            console.error('Error de inicio de sesión:', error);
        }
    };

    const register = async (name, idCard, firstLastName, secondLastName, phone, address, email, password, preferences) => {
        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name,
                idCard,
                firstLastName,
                secondLastName,
                phone,
                address,
                email,
                password,
            });
            const registerPreferences = await axios.post('http://localhost:8000/api/preferences', {
                preferences,
            });

        } catch (error) {
            console.error('Error de registro:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        } finally {
            setToken('');
            setIsAuthenticated(false);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);