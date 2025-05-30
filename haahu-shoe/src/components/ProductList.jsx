import React, { useContext } from 'react'
import { CartContext } from '../context/ShoeStoreContext';

const ProductList = ({products}) => {
  const { addToCart } = useContext(CartContext);
    if (!products.length) {
      return <p className="text-gray-500">No products available.</p>;
    }
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
              <button
                className="mt-auto bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => addToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ProductList