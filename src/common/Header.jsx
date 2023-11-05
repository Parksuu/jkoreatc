import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

  const activeStyle = {
    // color: 'red',
    // textDecoration: 'underline',
    fontWeight: 'bold' 
  }

  return (
      <>
        <div className="hero_area">
          <header className="header_section long_section px-0">
            {/* 상단 header 1 */}
            <ul className="navbar-nav1 mr-auto pr-5">
              <a href="https://www.tiktok.com/@jkorea_tour?_t=8foxQGs6cc5&_r=1">
                <li className="nav-item active">
                  <img src="/images/tictok1.png" alt="" width="50" height="50" />
                </li>
              </a>
              <a href="https://instagram.com/jkorea_tour?igshid=OGQ5ZDc2ODk2ZA==">
                <li className="nav-item">
                  <img src="/images/noback_instagram.png" alt="" width="50" height="50" />
                </li>
              </a>
              <a href="http://wa.me/821025979678">
                <li className="nav-item">
                  <img src="/images/call1.png" alt="" width="50" height="50" />
                </li>
              </a>
            </ul>

            {/* 상단 header 2 */}
            <Navbar expand="lg" className="custom_nav-container">
              <Navbar.Brand as={Link} to="/home">
                <img src="/images/noback_title.png" alt="" width="180" height="100" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/home" style={({ isActive }) => isActive ? activeStyle  : undefined}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/tour" style={({ isActive }) => isActive ? activeStyle  : undefined}>
                        Tour
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/privateTour" style={({ isActive }) => isActive ? activeStyle  : undefined}>
                        Private Tour
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about" style={({ isActive }) => isActive ? activeStyle  : undefined}>
                         About Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </Navbar.Collapse>
              </Navbar>
          </header>
          
        </div>
      </>
    
  );
};

export default Header;