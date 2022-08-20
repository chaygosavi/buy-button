import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function LargeSquareCard() {
  return (
    <Card sx={{ width: 250, height: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image="https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}

export default LargeSquareCard;
