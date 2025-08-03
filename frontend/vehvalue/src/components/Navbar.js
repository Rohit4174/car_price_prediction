import React from 'react';
import './Navbar.css';  
import logo from './logo.png'; 
    function Navbar() {
  return (
  <nav className="navbar1">
    <>
    <div className="navbar-content">
        
        <img src={logo} alt="Logo" className="logo" />
         <h1 className='h1'>VECH-VALUVATOR</h1>
         <h2 className='h2'>Vehicle Value App</h2>
         </div>
    </>
</nav>
  
  );
}
export default Navbar;