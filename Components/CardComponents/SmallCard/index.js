import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function SmallCard({ product }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product?.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product?.description.substring(0, 27)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SmallCard;
