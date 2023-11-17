import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image from "../assets/images/png/image2.avif";
const ReverseSplide = () => {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    interval: 2000,
  };
  return (
    <>
      <div className="container max-w-[1440px]">
        <Splide options={splideOptions}>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="px-2">
              <img src={image} alt="image" className="w-full h-[200px]" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default ReverseSplide;
