import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

import {
  windowsIcon,
  xboxIcon,
  iosIcon,
  psIcon,
  androidIcon,
} from "../assets/platformIcons";

const ItemCard = (props) => {
  return (
    <Card sx={{ maxWidth: 600, marginY: 1, height: 140 }} key={props.key}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
        />
        <CardContent sx={{ width: 900, height: 140, padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Box>
              {windowsIcon} {xboxIcon} {iosIcon} {psIcon} {androidIcon}
            </Box>
            <Typography>$ 10</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
