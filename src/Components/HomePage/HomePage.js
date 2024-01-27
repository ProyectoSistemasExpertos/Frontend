import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const HomePage = () => {
  const [view, setView] = useState('login');

  const switchView = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <Login switchView={switchView}/>;
      case 'register':
        return <Register switchView={switchView} />;
      case 'forgotPassword':
        return <ForgotPassword switchView={switchView} />;
      case 'resetPassword':
        return <ResetPassword switchView={switchView} />;
      default:
        return <Login switchView={switchView}/>;
    }
  };

  return (
<div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
  <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
    <Carousel />
    <div className="flex justify-center self-center z-10 absolute top-10 right-11 h-center">
      <div className="p-12 bg-white mx-auto rounded-3xl w-96 mt-25">
        {renderView()}
      </div>
    </div>
  </div>
  <footer className="bg-transparent absolute w-full bottom-0 left-0 z-30">
    <div className="container p-5 mx-auto flex items-center justify-between">
      <div className="flex mr-auto">
      <a style={{ color: '#ffffff', fontSize: '24px' }}>
        <strong>TU</strong>plas
      </a>
      </div>
    </div>
  </footer>
  <svg className="absolute bottom-0 left-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#4B1B92E6"
      fillOpacity="1"
      d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
</div>

  );
};

export default HomePage;
