import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="grid min-h-screen auto-rows-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;