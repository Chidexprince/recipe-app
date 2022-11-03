/* eslint-disable prettier/prettier */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import {Dashboard} from './src/screens/dashboard';
import {ForgotPassword} from './src/screens/forgot-password';
import {Login} from './src/screens/login';
import {Onboarding} from './src/screens/onboarding';
import {Register} from './src/screens/register';
import {theme} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RecipeList } from './src/screens/recipe-list';
import { RecipeProvider } from './src/contexts/recipe-context';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RecipeProvider>
        <SafeAreaView>
          <StatusBar />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {/* <Login /> */}
            {/* <Onboarding /> */}

            {/* <Register /> */}
            {/* <ForgotPassword /> */}
             {/* <Dashboard /> */}
          </ScrollView>
          
        </SafeAreaView>
        <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Dashboard" component={RecipeList} />
              <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
          </NavigationContainer>
        </RecipeProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
