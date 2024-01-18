// Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar fixed h-full ${isOpen ? 'w-48' : 'w-0'} bg-orange-500 text-black transition-width duration-300`}>
      <button className={`p-3.5 w-full bg-orange-500 ${isOpen ? 'hover:bg-gray-300' : ''}`} onClick={toggleSidebar}>
        <span style={{ verticalAlign: 'middle' }}>
          {isOpen ? '☰' : '☰'}
        </span>
      </button>
      {isOpen && (
        <ul>
          <li className="p-4 cursor-pointer hover:bg-blue-300">
            Opción 1
          </li>
          <li className="p-4 cursor-pointer hover:bg-blue-300">
            Opción 2
          </li>
          <li className="p-4 cursor-pointer hover:bg-blue-300">
            Opción 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
