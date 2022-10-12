import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ContentDrawer from "./components/ContentDrawer";
import { ToolbarStyle } from "./style";
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
