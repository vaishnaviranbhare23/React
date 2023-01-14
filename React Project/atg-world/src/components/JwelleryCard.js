import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Popper,
  Rating,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./jwellery.css";
import MenuIcon from "@mui/icons-material/Menu";
import { buttonStyle, fabStyles, headerStyle } from "../utils";

const jbuttonStyle = {
  backgroundColor: "#ebebeb",
  borderRadius: "0px",
  textTransform: "none",
  color: "#646464",
  "&:hover": { backgroundColor: "#c09578", color: "white" },
};
export const theme = createTheme();
export const JwelleryCard = ({ image }) => {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(2);
  const useStyles = makeStyles({
    root: {
      "& .hidden-box ": {
        display: "none",
      },
      "& .hidden-button": {
        display: "none",
      },
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      "& .default ": {
        display: "flex",
        flexDirection: "column",
      },
      "&:hover .hidden-box": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        transition: "0.5s ease",
      },
      "&:hover .default": {
        display: "none",
      },
      "&:hover .hidden-button": {
        display: "flex",
        position: "relative",
        top: "-30px",
        bottom: "60px",
      },
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card
        className={classes.root}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        sx={{
          width: "300px",
          height: "520px",
          boxShadow: "unset",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            image={image}
            sx={{ width: "100%" }}
            alt="green iguana"
          />
          <Button
            fullWidth
            className="hidden-button"
            variant="contained"
            sx={{
              backgroundColor: "#3e3e3e",
              borderRadius: "2px",
              padding: "10px",
              "&:hover": { backgroundColor: "#c09578" },
            }}
          >
            Quick View
          </Button>
          <Typography
            sx={{ fontSize: 13 }}
            style={fabStyles}
            color="text.secondary"
            gutterBottom
          >
            Best Selling Featured
          </Typography>
          <Typography style={headerStyle} sx={{ fontSize: "16px" }}>
            Dummy Product Name
          </Typography>
          <div className="default">
            <Divider sx={{ marginBlock: "20px" }} variant="middle" />
            <Typography
              style={fabStyles}
              sx={{ mb: 1.5, fontSize: "16px", fontWeight: "700" }}
              color="#c09578"
            >
              <b> $80.00</b>
            </Typography>
          </div>

          <Box className="hidden-box">
            <Divider sx={{ marginBlock: "5px" }} variant="middle" />
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography style={fabStyles} textAlign="center">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis...
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button sx={jbuttonStyle}>
                <FavoriteBorderIcon />
              </Button>
              <Button
                sx={jbuttonStyle}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  width: "200px",
                }}
              >
                Soldout
              </Button>
              <Button sx={jbuttonStyle}>
                <MenuIcon />
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
