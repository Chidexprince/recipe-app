/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";

import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import { Favourite } from "./favourite";
import Icon from 'react-native-vector-icons/Ionicons';

const RecipeCard = styled(Card)`
  background-color:${(props) => props.theme.colors.tertiaryBg};
  margin-bottom: 20px;
  border-radius: 6px;
`;

const RecipeCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.tertiaryBg};
`;

const Info = styled(View)`
  padding: 0 ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const RecipeTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primaryText};
`;


export const RecipeInfo = ({ recipe }) => {

  return (
    <RecipeCard elevation={5}>
      <View>
        <Favourite recipe={recipe} />
        <RecipeCardCover key={recipe.id} source={{ uri: recipe.image }} />
      </View>
      
      <Info>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <Section>
          <Icon name="stopwatch-outline" size={20}></Icon> 
          <Text>{recipe.readyInMinutes} Mins</Text>
          <Icon name="fast-food-outline" size={20}></Icon> 
          <Text>{recipe.servings} Servings</Text>
        </Section>
      </Info>
    </RecipeCard>
  )
};