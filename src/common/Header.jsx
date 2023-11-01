import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
      <>
        {/* header 1 */}
        <div className="hero_area">
          <header className="header_section long_section px-0">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto pr-5">
                  <a href="https://www.tiktok.com/@jkorea_tour?_t=8foxQGs6cc5&_r=1">
                    <li className="nav-item active">
                      <img
                        src="/images/tictok1.png"
                        alt=""
                        width="50"
                        height="50" />
                    </li>
                  </a>
                  <a href="https://instagram.com/jkorea_tour?igshid=OGQ5ZDc2ODk2ZA==">
                    <li className="nav-item">
                      <img
                        src="/images/noback_instagram.png"
                        alt=""
                        width="50"
                        height="50" />
                    </li>
                  </a>
                  <a href="http://wa.me/821025979678">
                    <li className="nav-item">
                      <img
                        src="/images/call1.png"
                        alt=""
                        width="50"
                        height="50" />
                    </li>
                  </a>
                </ul>
              </div>
            </nav>

            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <img
                  src="/images/noback_title.png"
                  alt=""
                  width="180"
                  height="100" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <b>
                      <Link className="nav-link" to="/home"> Home
                      </Link>
                        {/* <a className="nav-link" href="/Home">
                          Home <span className="sr-only">(current)</span>
                        </a> */}
                      </b>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tour"> Tour
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/privateTour"> Private Tour
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about"> About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>

        {/* <div className="hero_area">
          <header className="header_section long_section px-0">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto pr-5">
                  <a href="https://www.tiktok.com/@jkorea_tour?_t=8foxQGs6cc5&_r=1">
                    <li className="nav-item active">
                      <img src="images/tictok1.png" alt="" width="50" height="50" />
                    </li>
                  </a>
                  <a href="https://instagram.com/jkorea_tour?igshid=OGQ5ZDc2ODk2ZA==">
                    <li className="nav-item">
                      <img src="images/noback_instagram.png" alt="" width="50" height="50" />
                    </li>
                  </a>
                  <a href="http://wa.me/821025979678">
                    <li className="nav-item">
                      <img src="images/call1.png" alt="" width="50" height="50" />
                    </li>
                  </a>
                </ul>
              </div>
            </nav>

            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <img src="images/noback_title.png" alt="" width="180" height="100" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <b><a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a></b>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="tour.html">Tour</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="privateTour.html">Private Tour</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <section className="slider_section long_section">
            <div id="customCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <img id="up" src="" alt="" style={{ width: '100%', height: 'auto' }} />
                    <a href="http://wa.me/821025979678">
                      <img id="down" src="" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div> */}



      </>
    
  );
};


export default Header;