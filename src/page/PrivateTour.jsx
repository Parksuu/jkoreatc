
import React, { useEffect, useState } from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';

const PrivateTour = () => {
  const [upImage, setUpImage] = useState(''); // State to manage the "up" image source
  const [downImage, setDownImage] = useState(''); // State to manage the "down" image source

  // Function to get window width
  const getWindowWidth = () => {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  // Function to check and set images based on window width
  const checkWindowWidth = () => {
    const windowWidth = getWindowWidth();

    if (windowWidth <= 480) {
      // Set mobile image URLs
      setUpImage('images/privateTour_up_mob.png');
      setDownImage('images/privateTour_down_mob.png');
    } else {
      // Set web image URLs
      setUpImage('images/privateTour_up_web.png');
      setDownImage('images/privateTour_down_web.png');
    }
  };

  useEffect(() => {
    // Check window width on page load
    checkWindowWidth();

    // Attach a resize event listener to check window width on resize
    window.addEventListener('resize', checkWindowWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <>
    <body className="sub_page">
      <Header/> {/* header*/}
      <div>
        <section className="about_section layout_padding long_section">
          <div className="container">
            <img id="up" src={upImage} alt="" style={{ width: '100%', height: 'auto' }} />
            <a href="http://wa.me/821025979678">
              <img id="down" src={downImage} alt="" style={{ width: '100%', height: 'auto' }} />
            </a>
          </div>
        </section>
      </div>
      <Footer/>{/* footer section */}
    </body>
    </>
  );
};

export default PrivateTour;