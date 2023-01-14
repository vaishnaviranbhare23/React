import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import News1 from "../assets/images/news1.jpg";
import News2 from "../assets/images/news2.jpg";
import NewCard from "./NewCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const NewsCardCaraousel = ({ deviceType }) => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
      >
        <NewCard image={News1} />
        <NewCard image={News2} />
        <NewCard image={News1} />
        <NewCard image={News2} />
        <NewCard image={News1} />
        <NewCard image={News2} />
      </Carousel>
    </div>
  );
};

export default NewsCardCaraousel;
