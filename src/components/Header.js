import React from 'react';

import { Link } from 'react-router-dom';

   const Header = () => (
     <header>
      <div className="nav">
        <div className="nav-heading">
          <div className="nav-title">
          </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark">
          <h3 className ="navbar-brand">Career Tracker</h3>
           <div className="collapse navbar-collapse" id="nav-links">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Careers">Careers</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Details">Contacts</Link></li>
            </ul>
            </div>
          </nav>
      </div>
     </header>
   )


export default Header
