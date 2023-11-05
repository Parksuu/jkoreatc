import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url: "https://picsum.photos/200/300",
  },

  {
    label: "Image 2",
    alt: "image2",
    url: "https://picsum.photos/200/300",
  },

  {
    label: "Image 3",
    alt: "image3",
    url: "https://picsum.photos/200/300",
  },

  {
    label: "Image 4",
    alt: "image4",
    url: "https://picsum.photos/200/300",
  },

  {
    label: "Image 5",
    alt: "image5",
    url: "https://picsum.photos/200/300",
  },
]; 

const renderSlides = imageData.map(image => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
</div>
));

const Caro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setCurrentIndex(selectedIndex);
  }

  return (
    <div className="flex justify-center items-center py-5 px-3">
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={1000}
        className="w-[400px] lg:hidden"
      >
        {imageData.map((image, index) => (
          <Carousel.Item key={image.alt}>
            <img src={image.url} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
  
  export default Caro;