/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { FlatList, TouchableOpacity, SafeAreaView, Text } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

import { useFavourite } from "../contexts/favourite-context";
import { RecipeInfo } from "../components/recipe-card";

const FavouriteList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 10,
    },
  })``;
  
  const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: ${(props) => props.theme.space[2]};
  `;



  export const Favourites = () => {

    const { favourites } = useFavourite();

    return (
      <>
      {!favourites.length && (
        <EmptyContainer>
          <Icon
          name="folder-open-outline"
          size={100}
          color="#F96163"
        />
          <Text>You don't have any favourites.</Text>
        </EmptyContainer>
      )}
        <SafeAreaView>
          <FavouriteList
            data={favourites}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <RecipeInfo recipe={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </>
    );

   }