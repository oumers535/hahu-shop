import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
const Navbar = () => {
  
    const {DATA,cartOpen, setCartOpen, totalItems}= useContext(DataContext);
     const [selectedCategory, setSelectedCategory] = useState(DATA.categories[0].id);
  return (
     <header className="bg-indigo-600 text-white flex justify-between items-center p-4 shadow">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setSelectedCategory(DATA.categories[0].id)}>
            ClothesShop
          </h1>
          <button 
            onClick={() => setCartOpen(!cartOpen)} 
            aria-label="Toggle cart"
            className="relative focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5M17 13l1.4 5M6 21h12" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold text-white animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </header>
  )
}

export default Navbar