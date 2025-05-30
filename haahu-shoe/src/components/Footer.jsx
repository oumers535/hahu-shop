import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white p-4 text-center select-none">
          &copy;{new Date().getFullYear()} ShoeShop. All rights reserved.
        </footer>
  )
}

export default Footer