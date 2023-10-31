import React, { useEffect } from 'react';
import Head from '../common/Head';
import Header from '../common/Header';
import Footer from '../common/Footer';

const About = () => {
  useEffect(() => {
    // User Agent를 가져오는 함수
    function getUserAgent() {
      return navigator.userAgent;
    }

    // User Agent를 확인하여 이미지 변경
    function checkUserAgent() {
      const userAgent = getUserAgent();

      if (userAgent.includes("adr") || userAgent.includes("ios")) {
        // Android 또는 iOS인 경우
        document.getElementById("img1").src = "/images/aboutUs1.png"; // 새로 주는 이미지로 수정하면됨
      } else {
        document.getElementById("img1").src = "/images/aboutUs1.png";
      }
    }

    // 페이지 로드 시 User Agent 확인
    checkUserAgent();
  }, []);

  return (
    <>
      <Head/> {/* Head */}
      <body className="sub_page">
        <Header/> {/* header*/}

        {/* about section */}
        <section className="about_section layout_padding long_section">
          <img
            id="img1"
            src="/images/aboutUs1.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        <Footer/>{/* footer section */}

      </body>
      </>
  );
};


export default About;