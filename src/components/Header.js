import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

   const Header = () => (
   
    <header class="header">
      <div class="header__text-box">
      <h1 class ="heading-primary"><div class="heading-primary--left"><Link className="nav-link" to="/">Career Tracker</Link></div></h1>
       
         <span class="heading-primary--top">
          
          <div class="heading-primary--right"><Link className="nav-link" to="/Interviews">Interviews</Link></div>
        <div class="heading-primary--right"><Link className="nav-link" to="/About">About</Link></div>
        </span>
        
        <span class="heading-primary--bot">
          <div class="heading-primary--left"><Link className="nav-link" to="/Careers">Careers</Link></div>
          <div class="heading-primary--right"><Link className="nav-link" to="/Details">Contacts</Link></div>
        </span>
        </div>
      
    
      <script src="img/babel.min.js"></script>
      <script src="img/react.min.js"></script>
      <script src="img/react-dom.min.js"></script>
      <script src="script.js" type="text/babel"></script>
    </header>
   
   )


export default Header
