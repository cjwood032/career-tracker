import React from 'react';

import { Link } from 'react-router-dom';

   const Header = () => (
     <header>
      <div className="nav">
        <div className="nav-heading">
          <div className="nav-title">
          </div>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light">
          <h3 class ="navbar-brand">Career Tracker</h3>
           <div class="collapse navbar-collapse" id="nav-links">
            <ul class="navbar-nav">
              <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/Careers">Careers</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/Details">Contacts</Link></li>
            </ul>
            </div>
          </nav>
      </div>
     </header>
   )


export default Header
