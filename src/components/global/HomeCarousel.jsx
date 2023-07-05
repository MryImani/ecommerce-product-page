import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: "/images/image-product-1.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "/images/image-product-2.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "/images/image-product-3.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: "/images/image-product-4.jpg",
    caption: "Caption",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="sliderimage"
            />
           
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
