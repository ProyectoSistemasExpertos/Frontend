// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar fixed w-48 h-full bg-white text-black flex flex-col items-center rounded-r-lg">
      <div style={{ position: 'fixed' }}>
        <ul className="mt-12">
          <li className="p-4 cursor-pointer transition-transform transform-gpu hover:bg-blue-300 hover:scale-105 mb-2 rounded-md text-sm">
            Opción 1
          </li>
          <li className="p-4 cursor-pointer transition-transform transform-gpu hover:bg-blue-300 hover:scale-105 mb-2 rounded-md text-sm">
            Opción 2
          </li>
          <li className="p-4 cursor-pointer transition-transform transform-gpu hover:bg-blue-300 hover:scale-105 mb-2 rounded-md text-sm">
            Opción 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
