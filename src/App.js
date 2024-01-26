// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import NavBar from './Components/NavBar/NavBar';
import Booking from './Components/Body/Booking/Booking';
import HistorialPreferencias from './Components/Body/Booking/BodyBooking/HistoryPreference';
import HistorialReservaciones from './Components/Body/Booking/BodyBooking/BookingHistory';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory === 0 ? null : selectedCategory);
  };

  return (
    <Router>
      <div className="flex h-screen">
        <div className="w-48 flex-shrink-0 bg--">
          <Sidebar onCategoryChange={handleCategoryChange} />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <NavBar onCategoryChange={handleCategoryChange} />
          <div className="flex-1 flex items-start justify-start p-4 overflow-y-auto bg-white-300">
            <Routes>
              <Route
                path="/"
                element={<Booking selectedCategory={selectedCategory} />}
              />
              <Route
                path="/historial-preferencias"
                element={<HistorialPreferencias />}
              />
              <Route
                path="/historial-reservaciones"
                element={<HistorialReservaciones />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
