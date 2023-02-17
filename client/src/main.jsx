import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import App from "./App";
import { ProvideUser } from "./contexts/users";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ProvideUser>
          <App />
        </ProvideUser>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
