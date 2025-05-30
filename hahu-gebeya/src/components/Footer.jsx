import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-4 text-center">
          &copy; {new Date().getFullYear()}ClothesShop. All rights reserved.
        </footer>
  )
}

export default Footer