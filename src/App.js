// App.js
import React from 'react';
import Sidebar from './Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
          <p>Main Content Goes Here</p>
        </div>
      </div>
    </div>
  );
}

export default App;


