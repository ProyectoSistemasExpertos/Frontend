import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth } from './Components/AuthContext/Authenticator';
import { Navigate } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Sidebar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import Booking from './Components/Body/Booking/Booking';
import HistoryPreference from './Components/Body/Historys/HistoryPreference';
import UserHistory from './Components/Body/User/UserHistory';
import ViewUser from './Components/Body/User/ViewUser';
import ResetPassword from './Components/HomePage/ResetPassword';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
      isAuthenticated ? 
      navigate('/booking') 
      : 
      navigate('/');
    }, [isAuthenticated, navigate]);

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory === 0 ? null : selectedCategory);
  };

  return (
    <div className="flex h-screen">
      <div className="w-48 flex-shrink-0 bg--">
        <Sidebar onCategoryChange={handleCategoryChange} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar onCategoryChange={handleCategoryChange} />
        <div className="flex-1 flex items-start justify-start p-4 overflow-y-auto bg-white-300">
        <Routes>
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<HomePage />} />
            {isAuthenticated && (
              <>
                <Route path="/booking" element={<Booking selectedCategory={selectedCategory} />} />
                <Route path="/history-preference" element={<HistoryPreference />} />
                <Route path="/user-history" element={<UserHistory />} />
                <Route path="/view-user" element={<ViewUser />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
