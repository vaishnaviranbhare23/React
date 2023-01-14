import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Images from "./Images";
import { JwelleryCard } from "./JwelleryCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 700 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const JwelleryCaraousel = ({ deviceType, bestSell }) => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
      >
        {Images.map((image) => (
          <div>
            {bestSell ? (
              <JwelleryCard image={image} />
            ) : (
              <>
                {" "}
                <JwelleryCard image={image} />
                <JwelleryCard image={image} />
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
