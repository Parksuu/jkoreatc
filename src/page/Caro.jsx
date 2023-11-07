import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url: `${process.env.PUBLIC_URL}/images/carotest1.jfif`,
  },

  {
    label: "Image 1",
    alt: "image1",
    url: `${process.env.PUBLIC_URL}/images/carotest2.jfif`,
  },

  {
    label: "Image 1",
    alt: "image1",
    url: `${process.env.PUBLIC_URL}/images/carotest3.jfif`,
  },
];

const Caro = () => {

  
const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  }, 5000); // 5초마다 슬라이드 전환

  return () => {
    clearInterval(interval);
  };
}, []);

  return (
    <Carousel interval={null} activeIndex={currentIndex} onSelect={setCurrentIndex} controls={false} indicators={false}>
      {imageData.map((image, index) => (
        <Carousel.Item key={image.alt} active={index === currentIndex}>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="img-box">
                  <img src={image.url} alt={image.alt} width="1100" height="350" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
  
  export default Caro;