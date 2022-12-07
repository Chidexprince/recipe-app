/* eslint-disable prettier/prettier */
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { AuthProvider } from "./src/contexts/auth-context";
import { Navigation } from "./src/navigation";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
      </ThemeProvider>
      <StatusBar />
    </>
  );
};

export default App;
