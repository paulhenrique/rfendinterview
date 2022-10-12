import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="primary"
        component={Link}
        to="/"
      >
        <Home />
      </IconButton>

      {/* <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton> */}

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
  );
};

export default AppBar;
