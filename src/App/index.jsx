import React from "react";
import Router from "@/router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@/components/AppBar";

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <CssBaseline />
        <Box
          sx={{
            maxWidth: {
              md: "50%",
              sm: "70%",
              xs: "90%",
            },
            mx: "auto",
          }}
        >
          <AppBar />
          <Router />
        </Box>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
