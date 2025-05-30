import React from 'react'
 import { useContext, useState } from "react";
import CartProvider, { CartContext } from "./context/ShoeStoreContext";
import { DATA } from "./data/data";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {

const [selectedCategory, setSelectedCategory] = useState(DATA.categories[0].id);
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems } = useContext(CartContext);
    const products = DATA.categories.find(c => c.id === selectedCategory)?.products || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
      
      <div className="flex flex-col min-h-screen">
        <Navbar onCartToggle={() => setCartOpen(prev => !prev)} cartItemCount={totalItems} />
        <main className="flex flex-grow overflow-hidden">
          <CategoryList
            categories={DATA.categories}
            selectedCategoryId={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <section className="flex-grow p-6 overflow-y-auto bg-gray-50">
            <h2 className="text-xl font-semibold mb-6 select-none">{DATA.categories.find(c => c.id === selectedCategory)?.name} Shoes</h2>
            <ProductList products={products} />
          </section>
          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </main>
        <Footer />
      </div>
      
    );
}

export default App