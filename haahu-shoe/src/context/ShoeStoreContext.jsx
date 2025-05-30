import { createContext, useState } from "react";

export const CartContext = createContext();
  const CartProvider=({ children })=>{
    const [cartItems, setCartItems] = useState([]);
    const addToCart= (product)=> {
      setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
        }
        return [...prev, {...product, quantity:1}];
      });
    }
    const removeFromCart =(id)=> {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
    const increaseQuantity=(id)=> {
      setCartItems(prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
    }
    const decreaseQuantity=(id)=> {
      setCartItems(prev => prev.map(item => {
        if (item.id === id) {
          if (item.quantity === 1) return null;
          return {...item, quantity: item.quantity - 1};
        }
        return item;
      }).filter(Boolean));
    }
     const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          increaseQuantity,
          decreaseQuantity,
          totalItems,
          totalPrice,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
  export default CartProvider;