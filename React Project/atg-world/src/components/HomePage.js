import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import "./homepage.css";
import CustomPopover from "./Popover";
import Logo from "../assets/images/logo.png";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Navbar, { HeaderIntial } from "./Navbar";
import Header from "./Navbar";
import { DemoCarousel } from "./Caraousel";
import BasicCard from "./Cards";
import Img1 from "../assets/images/banner1.jpg";
import Img2 from "../assets/images/banner2.jpg";
import Img3 from "../assets/images/banner3.jpg";
import Banner4 from "../assets/images/banner4.jpg";

import BasicTabs from "./Tabs";
import NewCard from "./NewCard";
import NewsCardCaraousel from "./NewsCardCaraousel";
import { buttonStyle, fabStyles, headerStyle } from "../utils";
import { JwelleryCard } from "./JwelleryCard";
import { JwelleryCaraousel } from "./JwelleryCaraousel";

const HomePage = () => {
  return (
    <div className="fontStyle">
      <Grid container justifyContent="center" align="center">
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            align="center"
            sx={{ padding: "10px" }}
          >
            <Grid item lg={8} md={12} xs={12}>
              <Typography
                style={fabStyles}
                sx={{
                  fontSize: "12px",
                  textAlign: { md: "center", lg: "left" },
                }}
              >
                Free shipping on all domestic orders with coupon code{" "}
                <span style={{ color: "#c09578" }}>Watches2021</span>
              </Typography>
            </Grid>

            <Grid item lg={2} md={12} xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "10px",
                }}
              >
                <CustomPopover name="USD" />
                <Divider
                  orientation="vertical"
                  style={{
                    marginInline: "10px",
                    height: "unset",
                    color: "#c9c9c9",
                  }}
                  flexItem
                />
                <CustomPopover name="My Account" />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid
          container
          justifyContent="center"
          align="center"
          style={{ padding: "40px" }}
        >
          <Grid item lg={3} md={3} xs={10}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                fontSize: "12px",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Typography
                  style={fabStyles}
                  sx={{ fontSize: "14px", color: "#a4a4a4", fontWeight: "500" }}
                  textAlign="left"
                >
                  LOCATION
                </Typography>
                <Typography
                  style={fabStyles}
                  sx={{ fontSize: "12px" }}
                  textAlign="left"
                >
                  Street 12345 – USA
                </Typography>
              </div>

              <Divider
                orientation="vertical"
                flexItem
                style={{
                  marginInline: "10px",
                  height: "unset",
                  color: "#c9c9c9",
                }}
              />
              <div>
                <Typography
                  style={fabStyles}
                  sx={{ fontSize: "14px", color: "#a4a4a4", fontWeight: "500" }}
                  textAlign="left"
                >
                  CALL FREE
                </Typography>

                <Typography
                  style={fabStyles}
                  sx={{ fontSize: "12px" }}
                  textAlign="left"
                >
                  123 456 789 000
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{ margin: { xs: "20px", md: "unset" } }}
          >
            <img src={Logo} style={{ maxWidth: "150px" }} />
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid #e4e4e4",
                  paddingBlock: "8px",
                  paddingInline: "10px",
                }}
              >
                <SearchIcon sx={{ color: "#212121" }} />
              </div>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  border: "1px solid #e4e4e4",
                  padding: "8px",
                  marginInline: "20px",
                }}
              >
                <ShoppingCartIcon sx={{ marginInline: "10px" }} />
                <Divider
                  orientation="vertical"
                  flexItem
                  style={{ color: "#c9c9c9" }}
                />
                <Typography sx={{ marginInline: "10px" }}>
                  <b>$0.00</b>
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid xs={12}>
          <HeaderIntial />
        </Grid>

        <Grid xs={12}>
          <DemoCarousel />
        </Grid>
        <Grid xs={12}>
          <Grid
            container
            justifyContent="center"
            style={{ marginBlock: "30px", padding: "30px" }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <BasicCard
                image={Img1}
                text1="Design Creative"
                text2="Ring Jewelry Design"
                text3="From $60.99 – Sale 20%"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BasicCard
                image={Img2}
                text1=" Bestselling Products"
                text2="Victoria Diamonds"
                text3="Only from $89.00"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <BasicCard
                image={Img3}
                text1="Onsale Products"
                text2="Perfect Rings"
                text3="Selling Off 30%"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid item xs={12} style={{ marginBlock: "30px" }}>
          <Grid item lg={11} xs={10} style={{ marginBlock: "30px" }}>
            <BasicTabs />
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundImage: `url(${Banner4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "510px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              style={{
                position: "relative",
                top: "33%",
                paddingInline: "15px",
              }}
            >
              <Grid item xs={12} alignSelf="center">
                <Typography sx={{ fontSize: 14 }} color="#c09578" gutterBottom>
                  Sale Off 20% All Products
                </Typography>
                <Typography style={headerStyle} sx={{ fontSize: "50px" }}>
                  New Trending Collection
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  We Believe That Good Design is Always in Season
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    border: "3px solid #c09578",
                    paddingInline: "50px",
                    paddingBlock: "10px",
                    color: "#c09578",
                    "&:hover": {
                      backgroundColor: "#c09578",
                      color: "white",
                      borderColor: "#c09578",
                    },
                  }}
                >
                  <b>SHOPPING NOW </b>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginBlock: "30px", paddingInline: "50px" }}
          >
            <Typography
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "28px",
              }}
              textAlign="left"
            >
              <b>Bestselling Products</b>
            </Typography>
            <JwelleryCaraousel bestSell={true} />
          </Grid>
          <Grid
            item
            xs={10}
            justifyContent="center"
            style={{ marginBlock: "30px" }}
          >
            <Typography
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                fontWeight: 700,
                margin: "28px",
              }}
              textAlign="left"
            >
              <b> Monsta News</b>
            </Typography>
            <NewsCardCaraousel deviceType="vdncsdj" />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginBlock: "30px" }}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid item xs={12} style={{ marginBlock: "30px", padding: "20px" }}>
          <Typography
            style={headerStyle}
            sx={{ fontSize: "26px", fontWeight: 700, marginTop: "20px" }}
          >
            Our Newsletter
          </Typography>
          <Typography style={fabStyles}>
            Get E-mail updates about our latest shop and special offers.
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBlock: "30px",
            }}
          >
            <input
              type="text"
              style={{
                width: "45%",
                background: "#f6f3f3",
                color: "#a7a7a7",
                border: "2px solid #ebebeb",
              }}
              className="no-outline"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            ></input>
            <Button variant="contained" sx={buttonStyle}>
              <b>Subscribe</b>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} style={{ marginBlock: "10px" }}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid xs={12} style={{ padding: "50px" }}>
          <footer class="footer">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ fontSize: "14px" }}
              style={fabStyles}
            >
              <Grid item lg={3} md={6} xs={8}>
                <List>
                  <ListItem style={headerStyle} sx={{ fontSize: "20px" }}>
                    About Monsta
                  </ListItem>
                  <ListItem>
                    About Monsta Address: 6688 Princess Road, London, Greater
                    London
                  </ListItem>
                  <ListItem>BAS 23JK,</ListItem>
                  <ListItem>UK Phone: 123 456 789 - 000</ListItem>
                  <ListItem>Email: Contact@domain.com</ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={6} xs={8}>
                <List>
                  <ListItem style={headerStyle} sx={{ fontSize: "20px" }}>
                    Information
                  </ListItem>
                  <ListItem>About us</ListItem>
                  <ListItem>Blog</ListItem>
                  <ListItem>Contact</ListItem>
                  <ListItem>Services</ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={6} xs={8}>
                <List>
                  <ListItem style={headerStyle} sx={{ fontSize: "20px" }}>
                    My Account
                  </ListItem>
                  <ListItem>My Account </ListItem>
                  <ListItem>Contact</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Checkout</ListItem>
                  <ListItem>Frequently Questions</ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={6} xs={8}>
                <List>
                  <ListItem style={headerStyle} sx={{ fontSize: "20px" }}>
                    Top Rated Products
                  </ListItem>
                  <ListItem>Product dummy title $79.00</ListItem>
                  <ListItem>Dummy text for title $60.00$39.00</ListItem>
                </List>
              </Grid>
            </Grid>
          </footer>
        </Grid>
        <Grid item xs={12} item style={{ marginBlock: "20px" }}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid item lg={6} md={6} xs={10} style={{ marginBlock: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>Online Store</span>
            <span> Privacy Policy</span>
            <span> Terms Of Use</span>
            <span> Contacts</span>
          </div>
        </Grid>
        <Grid item xs={12} item style={{ marginBlock: "20px" }}>
          <Divider style={{ color: "#c9c9c9" }} />
        </Grid>
        <Grid item xs={12} style={{ marginBlock: "40px" }}>
          <Typography>
            Copyright © 2021 <span style={{ color: "#c09578" }}>HasThemes</span>{" "}
            | Built With <span style={{ color: "#c09578" }}>Monsta</span> By{" "}
            <span style={{ color: "#c09578" }}>HasThemes</span>.
          </Typography>
          <img
            width={250}
            style={{ marginBlock: "10px" }}
            src="https://cdn.shopify.com/s/files/1/0052/4979/4151/files/papyel2_large.png?v=1556102191"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
