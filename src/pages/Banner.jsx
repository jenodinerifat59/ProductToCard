import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import B1 from "../assets/image/B1.png";
import B2 from "../assets/image/B2.png";
import B3 from "../assets/image/B3.png";
import B4 from "../assets/image/B4.png";
import B5 from "../assets/image/B5.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const images = [B1, B2, B3, B4, B5];

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto overflow-hidden"> 
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-contain"  
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
