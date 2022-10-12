import React from "react";
import Router from "@/router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@/components/AppBar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <CssBaseline />
          <Box
            sx={{
              maxWidth: {
                md: "50%",
                sm: "70%",
                xs: "90%",
              },
              pt: "104px",
              mx: "auto",
            }}
          >
            <Router excedent={<AppBar />} />
          </Box>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
