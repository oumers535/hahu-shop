


const CategoryList = ({categories,selectedCategoryId, onSelectCategory }) => {

  return (
      <nav className="bg-white w-48 border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 select-none">Categories</h2>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.id}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md font-medium transition 
                  ${selectedCategoryId === cat.id ? 'bg-indigo-600 text-white' : 'text-gray-800 hover:bg-indigo-100'}`}
                onClick={() => onSelectCategory(cat.id)}
                aria-current={selectedCategoryId === cat.id ? 'true' : undefined}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
}

export default CategoryList