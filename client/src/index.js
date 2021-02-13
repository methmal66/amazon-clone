import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";
import "./styles/Header.css";
import "./styles/Login.css";
//import "bootstrap/dist/css/bootstrap.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F2C650",
    },
  },
  props: {
    MuiTextField: {
      size: "small",
      variant: "outlined",
      color: "primary",
      fullWidth: true,
    },
    MuiButton: {
      size: "small",
      variant: "contained",
      fullWidth: true,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
