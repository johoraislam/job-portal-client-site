import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../pages/shared/Footer';

const Main = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='mb-6'>
      <Navbar />
      </div>
      
      {/* Toaster placed here so all pages can use it */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <Outlet />
      <div className='my-8'>
      <Footer/>
      </div>
    </div>
  );
}

export default Main;
