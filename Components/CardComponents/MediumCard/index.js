import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

function MediumCard({ product }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product?.images[0]}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediumCard;
