
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

  useEffect(() => {
    const checkWindowWidth = () => {
      const windowWidth = getWindowWidth();
      if (windowWidth <= 480) {
        setUpImage('images/privateTour_up_mob.png');
        setDownImage('images/privateTour_down_mob.png');
      } else {
        setUpImage('images/privateTour_up_web.png');
        setDownImage('images/privateTour_down_web.png');
      }
    };
  
    checkWindowWidth(); // Check window width on page load
  
    window.addEventListener('resize', checkWindowWidth); // Attach a resize event listener
  
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []); // Empty dependency array
  


///////////////////////////////////////////////////////  
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