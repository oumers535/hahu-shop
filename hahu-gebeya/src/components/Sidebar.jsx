import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Sidebar = () => {
    const {DATA,setSelectedCategory, selectedCategory} = useContext(DataContext);
  return (
     <section className="bg-white w-48 border-r border-gray-200 p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-3">
              {DATA.categories.map(category => (
                <li key={category.id}>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md font-medium transition 
                    ${selectedCategory === category.id ? 'bg-indigo-600 text-white' : 'text-gray-800 hover:bg-indigo-100'}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>
  )
}

export default Sidebar