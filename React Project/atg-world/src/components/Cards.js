import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fabStyles, headerStyle } from "../utils";

export default function BasicCard({ image, text1, text2, text3 }) {
  return (
    <Card
      style={{
        height: "230px",
        margin: "20px",
        boxShadow: "unset",
      }}
      sx={{
        width: { sm: "400px", xs: "300px", lg: "400px" },
      }}
    >
      <div className="article-container">
        <div
          className="article-img-holder"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="article-title" style={{ textAlign: "left" }}>
          <Typography
            sx={{ fontSize: 14 }}
            style={fabStyles}
            color="text.secondary"
            gutterBottom
          >
            {text1}
          </Typography>
          <Typography sx={{ fontSize: "24px" }} style={headerStyle}>
            {text2}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {text3}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
