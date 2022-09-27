import React from "react";
import Router from "@/router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Container, CssBaseline } from "@mui/material";
import AppBar from "@/components/AppBar";

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <CssBaseline />
        <Container>
          <AppBar />
          <Router />
        </Container>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
