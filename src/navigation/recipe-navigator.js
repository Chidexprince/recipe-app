import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
  } from "@react-navigation/stack";

import { RecipeDetail } from "../screens/recipe-detail";
import { Recipes } from "../screens/recipes";
import { APP_PAGES } from "../constants/app-pages";
  
  
  const RecipeStack = createStackNavigator();
  
  export const RecipeNavigator = () => {
    return (
      <RecipeStack.Navigator
        screenOptions={{
          ...TransitionPresets.ModalTransition,
          headerShown: false
        }}
      >
        <RecipeStack.Screen
          name="Recipe"
          component={Recipes}
        />
        <RecipeStack.Screen
          name={APP_PAGES.RECIPE_DETAIL}
          component={RecipeDetail}
        />
      </RecipeStack.Navigator>
    );
  };