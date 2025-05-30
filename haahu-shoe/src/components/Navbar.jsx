import React from 'react'

const Navbar = ({onCartToggle, cartItemCount}) => {
  return (
      <header className="bg-indigo-600 text-white flex justify-between items-center p-4 shadow select-none">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => window.location.reload()}>
          ጫማ መደብር
        </h1>
        <button 
          onClick={onCartToggle} 
          aria-label="Toggle cart"
          className="relative focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5M17 13l1.4 5M6 21h12" />
          </svg>
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold text-white animate-pulse">
              {cartItemCount}
            </span>
          )}
        </button>
      </header>
    );
}

export default Navbar