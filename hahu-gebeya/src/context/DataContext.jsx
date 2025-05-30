import { createContext, useState } from "react";
import { DATA } from "../data/data";

export const DataContext = createContext();

export const DataProvider =({children})=>{
    const [selectedCategory, setSelectedCategory] = useState(DATA.categories[0].id);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    // Get products for selected category
    const products = DATA.categories.find(c => c.id === selectedCategory)?.products || [];

    const addToCart=(product)=> {
      setCartItems(prev => {
        const existItem = prev.find(item => item.id === product.id);
        if (existItem) {
          return prev.map(item => 
            item.id === product.id ? {...item, quantity: item.quantity + 1 } : item 
          );
        } else {
          return [...prev, {...product, quantity: 1}];
        }
      });
      setCartOpen(true);
    }

    const increaseQuantity=(id)=> {
      setCartItems(prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item));
    }

    const decreaseQuantity=(id)=> {
      setCartItems(prev => prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity - 1;
          if (newQty <= 0) return null;
          else return {...item, quantity: newQty};
        }
        return item;
      }).filter(Boolean));
    }

   const removeItem=(id)=> {
      setCartItems(prev => prev.filter(item => item.id !== id));
    }

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const contextValue = {addToCart, removeItem, decreaseQuantity, increaseQuantity, selectedCategory,setSelectedCategory, products, totalItems,totalPrice, cartOpen, setCartOpen}
return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
)
}