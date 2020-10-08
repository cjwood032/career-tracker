import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

   const Header = () => (
   
    <header class="header">
      <div class="header__text-box">
      <h1 class ="heading-primary"><Link className="nav-link" to="/">Career Tracker</Link></h1>
       
         <span class="heading-primary--left">
          
          <div class="heading-primary heading-primary--top"><Link className="nav-link" to="/Interviews">Interviews</Link></div>
        <div class="heading-primary heading-primary--bot"><Link className="nav-link" to="/About">Information</Link></div>
        </span>
        
        <span class="heading-primary--right">
          <div class="heading-primary heading-primary--top"><Link className="nav-link" to="/Careers">Careers</Link></div>
          <div class="heading-primary heading-primary--bot"><Link className="nav-link" to="/Details">Contacts</Link></div>
        </span>
        </div>
      
    
      <script src="img/babel.min.js"></script>
      <script src="img/react.min.js"></script>
      <script src="img/react-dom.min.js"></script>
      <script src="script.js" type="text/babel"></script>
    </header>
   
   )


export default Header
