
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../common/Header';
import Footer from '../common/Footer';

const Tour = () => {
  return (
    <>
    <body className="sub_page">
      <Header/>

      {/* Furniture section */}
      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="detail-box">
                  <Link to="/tour4">
                    <img src="images/tour4_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="detail-box">
                  <Link to="/tour2">
                    <img src="images/tour2_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="detail-box">
                  <Link to="/tour5">
                    <img src="images/tour5_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="detail-box">
                  <Link to="/tour1">
                    <img src="images/tour1_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Furniture section */}
      <Footer/>{/* footer section */}
    </body>
    </>
  );
};

export default Tour;