import React from 'react';
import { useState, useEffect } from "react";
//import Sidebar from './Components/SideBar/SideBar'
//import NavBar from './Components/NavBar/NavBar';
//import Booking from './Components/Body/Booking/Booking';
import HomePage from './Components/HomePage/HomePage';
window.Alpine = require('alpinejs');

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  return ( 
   /*
    <div className="flex h-screen">
      <div className="w-48 flex-shrink-0 bg--">
        <Sidebar onCategoryChange={handleCategoryChange} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-1 flex items-start justify-start p-4 overflow-y-auto bg-white-300">
          
          <Booking selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
    */
    <div>
      <HomePage />
    </div>
  );
};

export default App;
