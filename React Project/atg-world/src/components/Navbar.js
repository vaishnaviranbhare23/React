import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fabStyles } from "../utils";
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Logo from "../assets/images/logo.png";

import { createTheme } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      md: 700,
    },
  },
});

const NavContent = () => {
  return (
    <Nav style={fabStyles}>
      <Nav.Link href="#home" style={{ color: "rgb(0 0 0)" }}>
        <b> Home</b>
        <KeyboardArrowDownIcon
          style={{ width: "18px", color: "rgb(154 154 154)" }}
        />
      </Nav.Link>
      <Nav.Link href="#link" style={{ color: "rgb(0 0 0)" }}>
        <b>Product</b>
        <KeyboardArrowDownIcon
          style={{ width: "18px", color: "rgb(154 154 154)" }}
        />
      </Nav.Link>
      <Nav.Link href="#link" style={{ color: "rgb(0 0 0)" }}>
        <b>Shop</b>
        <KeyboardArrowDownIcon
          style={{ width: "18px", color: "rgb(154 154 154)" }}
        />
      </Nav.Link>
      <Nav.Link href="#link" style={{ color: "rgb(0 0 0)" }}>
        <b>Blog</b>
        <KeyboardArrowDownIcon
          style={{ width: "18px", color: "rgb(154 154 154)" }}
        />
      </Nav.Link>
      <Nav.Link href="#link" style={{ color: "rgb(0 0 0)" }}>
        <b>Pages</b>
        <KeyboardArrowDownIcon
          style={{ width: "18px", color: "rgb(154 154 154)" }}
        />
      </Nav.Link>
    </Nav>
  );
};
export const HeaderIntial = () => {
  return (
    <Navbar id="navbar" bg="#000000" expand="lg">
      <Container style={{ justifyContent: "space-between" }}>
        <Navbar.Brand className="showMenu">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "center" }}
          id="basic-navbar-nav"
        >
          <NavContent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Header = () => {
  return (
    <Navbar
      fixed="top"
      id="hidden-navbar"
      // style={{ backgroundColor: "rgb(255 255 255 / 90%)" }}
      expand="lg"
    >
      <Container style={{ justifyContent: "space-between" }}>
        <Navbar.Brand>
          {" "}
          <img src={Logo} style={{ maxWidth: "120px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: "right" }}
          id="basic-navbar-nav"
        >
          <NavContent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("func");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("hidden-navbar").style.top = "0";
    document.getElementById("navbar").style.display = "none";
  } else {
    document.getElementById("hidden-navbar").style.top = "-50px";
    document.getElementById("navbar").style.display = "block";
  }
}

export default Header;
