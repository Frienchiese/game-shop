import * as React from "react";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function ItemsList(props) {
  return (
    <List
      style={{
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      <ListItem alignItems="flex-start" key={props.key}>
        <ListItemText primary={props.title} />
        <Typography variant="body1" color="text.secondary">
          {props.price + "$"}
        </Typography>
      </ListItem>
    </List>
  );
}
