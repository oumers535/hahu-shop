import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const CartSidebar = () => {
    const {cartOpen,setCartOpen,cartItems,decreaseQuantity, increaseQuantity,removeItem, totalPrice} = useContext(DataContext);
  return (
   <aside className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
            ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button 
                aria-label="Close cart"
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => setCartOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-112px)]">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex items-center border border-gray-200 rounded-md p-2">
                      <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                      <div className="flex-grow ml-3">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <button 
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label="Decrease quantity"
                          >-</button>
                          <span>{item.quantity}</span>
                          <button 
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                          >+</button>
                        </div>
                      </div>
                      <button 
                        className="text-red-600 hover:text-red-800 ml-2 focus:outline-none"
                        aria-label="Remove item"
                        onClick={() => removeItem(item.id)}
                      >
                        &times;
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cartItems.length > 0 && (
              <footer className="p-4 border-t border-gray-200">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button 
                  className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => alert('Checkout functionality not implemented')}
                >
                  Checkout
                </button>
              </footer>
            )}
          </aside>
  )
}

export default CartSidebar