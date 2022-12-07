/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavourite } from "../contexts/favourite-context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ recipe }) => {
  const { favourites, addFavourites, removeFavourites } = useFavourite();
    
  const isFavourite = favourites.find((r) => r.id === recipe.id);
  
    return (
      <FavouriteButton
        onPress={() =>
          !isFavourite ? addFavourites(recipe) : removeFavourites(recipe)
        }
      >
        <Icon
          name={isFavourite ? "heart" : "heart-outline"}
          size={24}
          color={isFavourite ? "#F96163" : "white"}
        />
      </FavouriteButton>
    );
  };