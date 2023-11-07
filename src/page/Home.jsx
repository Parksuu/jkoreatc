import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Caro from './Caro';

const Home = () => {
    // 화면 너비를 가져오는 함수
    // const getWindowWidth = () => {
    //   return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // };
  
    // // 화면 너비를 확인하여 이미지 변경
    // const checkWindowWidth = () => {
    //   const windowWidth = getWindowWidth();
  
    //   // 특정 사이즈 이하인 경우 이미지 변경
    //   if (windowWidth <= 480) {
    //     document.getElementById("up").src = "images/index_main1_up_mob.png";
    //     document.getElementById("down").src = "images/index_main1_down_mob.png";
    //   } else {
    //     document.getElementById("up").src = "images/index_main1_up_web.png";
    //     document.getElementById("down").src = "images/index_main1_down_web.png";
    //   }
    // };
  
    // // 페이지 로드 및 리사이즈 시 화면 너비 확인
    // window.addEventListener("load", checkWindowWidth);
    // window.addEventListener("resize", checkWindowWidth);
  
    return (
        <>
    <body className="sub_page">
        <Header/>
        <div>
          <img src="images/index_main1_up.png" alt="" style={{ width: '100%', height: 'auto' }} />
          <a href="http://wa.me/821025979678"><img src="images/index_main1_down.png" alt="" style={{ width: '100%', height: 'auto' }} /></a>
        </div>
        {/* 'Our best tour is' section */}
        <section className="blog_section">
          <div className="container">
            <div className="heading_container">
              <h2>Our best tour is🙂</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="detail-box">
                    <a href="tour4.html">
                      <img src="images/tour4_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="detail-box">
                    <a href="tour2.html">
                      <img src="images/tour2_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="detail-box">
                    <a href="tour5.html">
                      <img src="images/tour5_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="detail-box">
                    <a href="tour1.html">
                      <img src="images/tour1_short.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <br/> <br/>

        {/* carousel 테스트 */}
        <section className="blog_section">
          <div className="container">
            <div className="heading_container">
              <h2>Carousel 테스트🙂</h2>
            </div>
              <Caro/>
            </div>
        </section>

        {/* SNS section */}
        <section className="blog_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <div className="row">
                <img src="images/instagram.png" alt="" width="40" height="40" />
                <h2>MORE INFO JKOREA IN SNS</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <a href="https://www.instagram.com/p/CwujQWbLwgP/?igshid=MzRlODBiNWFlZA==">
                      <img src="images/instagram1.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <a href="https://www.instagram.com/p/CwhkYYbLZwm/?igshid=MzRlODBiNWFlZA==">
                      <img src="images/instagram2.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <a href="https://www.instagram.com/reel/Cwz6LXzr4S6/?igshid=MzRlODBiNWFlZA==">
                      <img src="images/instagram3.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Client section */}
        <Footer/>
      </body>
      </>
    );
  };
  
  export default Home;