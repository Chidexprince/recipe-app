import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app-navigator";
import { AuthNavigator } from "./auth-navigator";
import { useAuth } from "../contexts/auth-context";


export const Navigation = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      { user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};