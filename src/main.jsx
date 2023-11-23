import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  "./index.css"
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const colors = {
  main: {
    100: "#020202",
    200: "#E6B790",
    300: "#DFACAE",
    400: "#72B3B6",
    500: "#ECE2DA",
  },
};

const theme = extendTheme({ colors });

const mainColor = theme.colors.main;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: `linear-gradient(to right, ${mainColor[100]}, ${mainColor[400]})`,
        }}
      >
        <App />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
