import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

const App = () => {

  const appStyle = {
    flexDirection: 'column',
    width: '100%'
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
