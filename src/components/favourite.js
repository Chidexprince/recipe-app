/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = () => {
  
    const isFavourite = false;
  
    return (
      <FavouriteButton
      >
        <Icon
          name={isFavourite ? "heart" : "heart-outline"}
          size={24}
          color={isFavourite ? "red" : "white"}
        />
      </FavouriteButton>
    );
  };