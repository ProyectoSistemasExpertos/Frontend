import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState([]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });

            const authToken = response.data.access_token;
            setToken(authToken);
            setIsAuthenticated(true);
            setUserData(response.data.user);
        } catch (error) {
            setToken('');
            setIsAuthenticated(false);
            console.error('Error de inicio de sesión:', error);
        }
    };

    const register = async (name, email, password, idCard, firstLastName, secondLastName, phone, address, idCategory, idRol) => {
        try {
            const response = await axios.post('http://localhost:8000/api/person/create', {
                name: name,
                email: email,
                password: password,
                idCard: idCard,
                firstLastName: firstLastName,
                secondLastName: secondLastName,
                phone: phone,
                address: address,
                idRol: idRol,
            });
            const user = await axios.get(`http://localhost:8000/api/person/${idCard}`);
            const idPerson = user.data.id
            const registerPreferences = await axios.post('http://localhost:8000/api/preference/create', {
                idPerson,
                idCategory,
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
        <AuthContext.Provider value={{ isAuthenticated, token, userData, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);