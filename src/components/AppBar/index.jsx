import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { History, Home } from "@mui/icons-material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const ToolbarStyle = {
  width: {
    md: "60%",
    sm: "80%",
    xs: "100%",
  },
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const ListItemStyle = {
  p: 0,
};

const ContentDrawer = () => {
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

const AppBarNoMui = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Toolbar sx={ToolbarStyle}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component={Link}
              to="/"
            >
              <Home />
            </IconButton>
            <Tooltip title="Abrir Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}
                onClick={() => setIsDrawerOpen(true)}
                to="/"
              >
                <Avatar src="https://robohash.org/rfinterviewapp" />
              </IconButton>
            </Tooltip>
          </Toolbar>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      <SwipeableDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ContentDrawer />
      </SwipeableDrawer>
    </>
  );
};

export default AppBarNoMui;
