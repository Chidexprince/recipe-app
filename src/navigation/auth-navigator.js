/* eslint-disable prettier/prettier */
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding } from "../screens/onboarding";
import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { ForgotPassword } from "../screens/forgot-password";
import { APP_PAGES } from "../constants/app-pages";

const Stack = createStackNavigator();

export const AuthNavigator = () => (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={APP_PAGES.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={APP_PAGES.LOGIN} component={Login} />
      <Stack.Screen name={APP_PAGES.REGISTER} component={Register} />
      <Stack.Screen name={APP_PAGES.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );