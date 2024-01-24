// Sidebar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = "http://127.0.0.1:8000/api";

const Sidebar = () => {
  const [categorys, setCategorys] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategoryId((prevId) => (prevId === categoryId ? null : categoryId));
    console.log(categoryId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCategory = await axios.get(`${endpoint}/category`);
        setCategorys(getCategory.data);
      } catch (error) {
        console.error("Error category ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sidebar fixed w-48 h-full bg-white text-white flex flex-col items-center rounded-r-lg">
      <div style={{ position: "fixed" }}>
        <ul className="mt-12">
          {categorys.map((category) => (
            <li
              key={category.idCategory}
              className="p-4 cursor-pointer transition-transform transform-gpu hover:bg-blue-300 hover:scale-105 mb-2 rounded-md text-sm"
            >
              <div className="inline-flex items-center">
                <label className={`relative flex items-center p-3 rounded-full cursor-pointer ${selectedCategoryId === category.idCategory ? 'checked' : ''}`} htmlFor={category.idCategory}>
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id={category.idCategory}
                    checked={selectedCategoryId === category.idCategory}
                    onChange={() => handleCheckboxChange(category.idCategory)}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label className="mt-px font-light text-black cursor-pointer select-none" htmlFor={category.idCategory}>
                  {category.typeCategory}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
