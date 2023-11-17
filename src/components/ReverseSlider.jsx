import React from "react";
import Slider from "react-slick";
import image from "../assets/images/png/image3.webp";
import { SliderComplete, sliderData } from "./common/Helper";
const ReverseSlider = () => {
  const slider1 = {
    dots: false,
    arrow: false,
    loop: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    pauseOnHover: false,
    cssEase: "linear",
    infinite: true,
    vertical: true,
  };
  return (
    <>
      <div className="max-w-[1440px] mx-auto flex">
        {SliderComplete.map((slide, i) => {
          return (
            <Slider
              {...slider1}
              className=" max-w-[33.333%]"
              rtl={slide.reverse}
              key={i}
            >
              {sliderData.map((data, i) => {
                return (
                  <div className="px-2" key={i}>
                    <img
                      src={data.image}
                      alt="image"
                      className="w-full h-[200px]"
                    />
                  </div>
                );
              })}
            </Slider>
          );
        })}
      </div>
    </>
  );
};

export default ReverseSlider;
