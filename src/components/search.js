/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useRecipe } from "../contexts/recipe-context";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { search, onSearch } = useRecipe();
  const [searchWord, setSearchWord] = useState(search);
  useEffect(() => {
    setSearchWord(search);
  }, [search]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a recipe"
        value={searchWord}
        onSubmitEditing={() => {
          onSearch(searchWord);
        }}
        onChangeText={(text) => {
          setSearchWord(text);
        }}
      />
    </SearchContainer>
  );
};