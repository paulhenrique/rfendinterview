import { Link, useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const HomeButton = () => {
  const { pathname } = useLocation();
  return (
    <>
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
    </>
  );
};
