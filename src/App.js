import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeContextProvider>
      <div className='flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white overflow-auto'>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`grow h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white   ${isOpen ? 'ml-64' : 'ml-20'
            }`}
        >
          <Navbar />
          <div >
            <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}


export default App;
