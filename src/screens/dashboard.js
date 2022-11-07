/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import { Card, Chip } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import { RecipeInfo } from "../components/recipe-card";

import { useRecipe } from "../contexts/recipe-context";
import { Search } from "../components/search";
import { ScrollView } from 'react-native-gesture-handler';


const DashboardContainer = styled(View)`
  background-color:${(props) => props.theme.colors.white};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primaryText};
`;

const SearchContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]} 0;
`;

const RandomCardContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]} 0;
`;

const RandomCard = styled(Card)`
  background-color:${(props) => props.theme.colors.tertiaryBg};
  border-radius: 6px;
`;

const RecipeCardCover = styled(Card.Cover)`
  padding: 0 ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.tertiaryBg};
  opacity: 0.5;
`;

const TitleContainer = styled(View)`
  width: 80%;
`;

const RecipeTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primaryText};
  position: absolute;
  top: -120px;
  right: -40px;
  z-index: 9;
  text-align: center;
`;

const Category = styled(View)`
  flex: 1;
  flex-direction: row;
  padding: 0 ${(props) => props.theme.space[3]};
`;

const RecipeContainer = styled(View)`
  padding: ${(props) => props.theme.space[0]};  
`;

const RecipeList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;

const CardContainer = styled(TouchableOpacity)`
  width: 200px;
  margin: 0 10px;
`;



export const Dashboard = () => {
  const { loading, recipes, randomRecipe } = useRecipe();
  return (
    <>
      <SafeAreaView>
      <ScrollView>
        <DashboardContainer>
          <Title>What would you like to cook today?</Title>
          <SearchContainer>
            <Search />
          </SearchContainer>

          
            
          

          <RandomCardContainer>
            <RandomCard>
              <RecipeCardCover key={randomRecipe.id} source={{ uri: randomRecipe.image }} />
            </RandomCard>
            <TitleContainer>
              <RecipeTitle>{randomRecipe.title}</RecipeTitle>
            </TitleContainer>
          </RandomCardContainer>

          <RecipeContainer>
            <Text>Latest Recipes</Text>
            <RecipeList 
            horizontal
            data={recipes}
            renderItem={({ item }) => (
              <CardContainer>
                  <RecipeInfo recipe={item} />
              </CardContainer>
            )}
            keyExtractor={(item) => item.id}
          />
          </RecipeContainer>
        </DashboardContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
