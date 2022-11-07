/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { FavouritesProvider } from "../contexts/favourite-context";
import { RecipeProvider } from "../contexts/recipe-context";

import { Dashboard } from "../screens/dashboard";
import { Favourites } from "../screens/favourites";
import { Profile } from "../screens/profile";
import { colors } from "../theme/colors";
import { RecipeNavigator } from "./recipe-navigator";
import { APP_PAGES } from "../constants/app-pages";

const Tab = createBottomTabNavigator();

const TabIcons = {
  Dashboard: "home",
  Recipes: "fast-food",
  Favourites: "heart",
  Profile: "person",
};

const screenOptions = ({ route }) => {
  const iconName = TabIcons[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.primaryBg,
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavouritesProvider>
    <RecipeProvider>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={APP_PAGES.DASHBOARD} component={Dashboard} />
        <Tab.Screen name={APP_PAGES.RECIPES} component={RecipeNavigator} />
        <Tab.Screen name={APP_PAGES.FAVOURITES} component={Favourites} />
        <Tab.Screen name={APP_PAGES.PROFILE} component={Profile} />
      </Tab.Navigator>
    </RecipeProvider>
  </FavouritesProvider>
);
