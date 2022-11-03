/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { RecipeInfo } from "../components/recipe-card";
import { useRecipe } from "../contexts/recipe-context";
import { Search } from "../components/search";




const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
`;


export const RecipeList = () => {
 const { recipes, loading } = useRecipe();
  
 console.log(recipes)

  return (
    <>
      <SafeAreaView>
       {loading && (
          <LoadingContainer>
            <ActivityIndicator size={50} animating={true} color="#F96163" />
          </LoadingContainer>
        )}
         {/*   <Search /> */}
         <Search />
        <RestaurantList
          data={recipes}
          renderItem={({ item }) => (
            <TouchableOpacity>
              {/* <Spacer position="bottom" size="large"> */}
                <RecipeInfo recipe={item} />
              {/* </Spacer> */}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};