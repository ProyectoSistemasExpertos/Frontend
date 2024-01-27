import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext/Authenticator';

const root = ReactDOM.createRoot(document.getElementById('root'));

//ESTE RENDER REDIRIGE HACIA EL FRONT DEL LOGIN SIN EMBARGO PUEDE USARSE PARA TESTEOS INDIVIDUALES DE CUALQUIER VISTA 
root.render(  
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
