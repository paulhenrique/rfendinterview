import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { History, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ListItemStyle } from "../style";

export const Menu = () => {
  return (
    <Box>
      <List>
        <ListItem sx={ListItemStyle}>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Início" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={ListItemStyle}>
          <ListItemButton component={Link} to="/historico">
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Histórico" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
