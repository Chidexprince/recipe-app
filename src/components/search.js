/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

// import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
//   const { keyword, search } = useContext(LocationContext);
  const [recipe, setRecipe] = useState('');
  useEffect(() => {
    setRecipe(recipe);
  }, [recipe]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a recipe"
        value={recipe}
        onChangeText={(text) => {
            setRecipe(text);
        }}
      />
    </SearchContainer>
  );
};