import React, { Component } from "react";
import Img1 from "../assets/images/slider1.jpg";
import Img2 from "../assets/images/slider2.jpg";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Button, Grid, Typography } from "@mui/material";
import { buttonStyle, fabStyles, headerStyle } from "../utils";

const CaraouselText = () => {
  return (
    <div>
      <Typography
        style={fabStyles}
        sx={{
          fontSize: { md: "18px", xs: "12px" },
          lineHeight: "18px",
        }}
      >
        Exclusive Offer -10% Off This Week
      </Typography>
      <Typography
        style={headerStyle}
        sx={{
          fontSize: { lg: "60px", md: "50px", sm: "30px", xs: "20px" },
          marginBlock: "15px",

          lineHeight: "60px",
          fontWeight: "700",
          color: "#212121",
        }}
      >
        Jwellery Arrivals
      </Typography>
      <Typography
        style={fabStyles}
        sx={{
          fontSize: { md: "18px", xs: "12px" },
          lineHeight: "18px",
          marginBlock: "15px",
        }}
      >
        Highlight Text Before Title{" "}
        <span style={{ color: "#c09578" }}>
          <b>$2.199.00</b>
        </span>
      </Typography>
      <Button style={fabStyles} sx={buttonStyle} variant="contained">
        <b>SHOP NOW</b>
      </Button>
    </div>
  );
};
export const DemoCarousel = () => {
  return (
    <div style={{ height: "500px" }}>
      <Carousel
        showThumbs={false}
        swipeable={true}
        showArrows={false}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
      >
        <Grid
          style={{
            padding: "70px",
            height: "470px",
            backgroundImage: `url(${Img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            backgroundPosition: "center center",
          }}
          container
          justifyContent="left"
          alignItems="center"
        >
          <Grid item lg={6} xs={12} sx={{ textAlign: "left" }}>
            <CaraouselText />
          </Grid>
        </Grid>
        <Grid
          style={{
            padding: "70px",
            height: "470px",
            backgroundImage: `url(${Img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
            backgroundPosition: "center center",
          }}
          container
          justifyContent="left"
          alignItems="center"
        >
          <Grid item lg={6} xs={12} sx={{ textAlign: "left" }}>
            <CaraouselText />
          </Grid>
        </Grid>
      </Carousel>
    </div>
  );
};
