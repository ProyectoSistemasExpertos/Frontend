import React from 'react';
import Sidebar from './Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar';
import Booking from './Components/Body/Booking/Booking';


function App() {
  return (
    <div className="flex h-screen">
      {/*
      <div className="w-48 flex-shrink-0 bg--">
        <Sidebar />
      </div>*/}
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-1 flex items-start justify-start p-4 overflow-y-auto bg-white-300">
          {/* Body */}
          <Booking
           />
        </div>
      </div>
    </div>
  );
}

export default App;
