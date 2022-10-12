import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { History, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ListItemStyle } from "../style";

export const ContentDrawer = () => {
  return (
    <>
      <Box
        xs={{
          width: 550,
          p: 0,
        }}
        role="presentation"
      >
        <Box
          sx={{
            background: "primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "25px",
            gap: "20px",
            width: "300px",
          }}
        >
          <Avatar
            src="https://robohash.org/rfinterviewapp"
            sx={{ width: "150px", height: "150px", margin: "auto" }}
          />
          <Box>
            <Typography variant="h6" component="p">
              Nome do Usuário
            </Typography>
            <Typography variant="caption" component="p">
              Pontuação: <b>300</b>
            </Typography>
          </Box>
        </Box>
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
      </Box>
    </>
  );
};

export default ContentDrawer;
