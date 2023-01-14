import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box } from "@mui/system";
import { fabStyles, headerStyle } from "../utils";

const NewCard = ({ image }) => {
  return (
    <Box sx={{ maxWidth: 370 }}>
      <Card
        sx={{
          margin: "20px",
          borderRadius: "0px",
          "&:hover": {
            filter: "brightness(0.5)",
            transition: " 0.5s ease-in-out",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
      </Card>
      <Typography sx={{ marginBlock: "20px" }} style={headerStyle}>
        Temporibus autem quibusdam
      </Typography>
      <Typography style={fabStyles}>
        By <span style={{ color: "#c09578" }}>Monsta Demo Admin</span> / 27,
        Oct, 19
      </Typography>
      <Typography
        sx={{ marginTop: "20px", textAlign: "center", fontSize: "13px" }}
        style={fabStyles}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi...
      </Typography>
      <Button style={{ color: "#c09578" }}>
        Read More
        <ArrowRightAltIcon />
      </Button>
    </Box>
  );
};

export default NewCard;
