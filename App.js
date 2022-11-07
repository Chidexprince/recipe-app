/* eslint-disable prettier/prettier */
import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { Dashboard } from "./src/screens/dashboard";
import { ForgotPassword } from "./src/screens/forgot-password";
import { Login } from "./src/screens/login";
import { Onboarding } from "./src/screens/onboarding";
import { Register } from "./src/screens/register";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Recipes } from "./src/screens/recipes";
import { RecipeProvider } from "./src/contexts/recipe-context";
import { FavouritesProvider } from "./src/contexts/favourite-context";
import { Favourites } from "./src/screens/favourites";
import { Profile } from "./src/screens/profile";
import { AppNavigator } from "./src/navigation/app-navigator";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar />
    </>
  );
};

export default App;
