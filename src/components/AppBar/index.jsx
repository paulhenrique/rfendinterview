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
import { Link, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();
  return (
    <>
      <AppBar position="fixed">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Toolbar sx={ToolbarStyle}>
            {pathname !== "/" ? (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: "white" }}
                component={Link}
                to="/"
              >
                <Home />
              </IconButton>
            ) : (
              <span></span>
            )}

            <Tooltip title="Abrir Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setIsDrawerOpen(true)}
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
        onOpen={() => setIsDrawerOpen(true)}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ContentDrawer />
      </SwipeableDrawer>
    </>
  );
};

export default AppBarNoMui;
