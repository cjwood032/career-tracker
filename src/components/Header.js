import React from 'react';
import { Link } from 'react-router-dom';

   const Header = () => (
     <header>
      <div className="nav">
        <div className="nav-heading">
        <div className="nav-title">
            Career Tracker
        </div>
        </div>
        <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Careers"> Careers </Link></li>
          <li><Link to="/Details"> Contacts</Link></li>
          
        </ul>
        </div>
      </div>
     </header>
   )


export default Header
