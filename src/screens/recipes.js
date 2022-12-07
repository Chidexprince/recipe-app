/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { RecipeInfo } from "../components/recipe-card";
import { useRecipe } from "../contexts/recipe-context";
import { Search } from "../components/search";
import { APP_PAGES } from "../constants/app-pages";


const RecipeList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
`;


export const Recipes = ({ navigation }) => {
 const { recipes, loading } = useRecipe();

  return (
    <>
      <SafeAreaView>
       {loading && (
          <LoadingContainer>
            <ActivityIndicator size={50} animating={true} color="#F96163" />
          </LoadingContainer>
        )}

        <Search />
        <RecipeList
          data={recipes}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() =>
              navigation.navigate(APP_PAGES.RECIPE_DETAIL, {
                recipe: item,
              })
            }>
                <RecipeInfo recipe={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};