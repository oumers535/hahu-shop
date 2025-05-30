import React from 'react'
import { DataProvider } from './context/DataContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <DataProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-grow overflow-hidden">
          
        </main>
      </div>
    </DataProvider>
  )
}

export default App