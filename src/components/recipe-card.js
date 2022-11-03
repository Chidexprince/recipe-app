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
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RecipeTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primaryText};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Star = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-right:  ${(props) => props.theme.sizes[0]};
`;

const Status = styled(Image)`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
  
`;

const PrepTime = styled(Image)`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
`;

export const RecipeInfo = ({ recipe }) => {

  return (
    <RecipeCard elevation={5}>
      <View>
        <Favourite />
        <RecipeCardCover key={recipe.id} source={{ uri: recipe.image }} />
      </View>
      
      <Info>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <Text>{recipe.dishTypes.toString()}</Text>
        <Section>
          <SectionEnd>
            {/* {isClosedTemporarily && <Status source={require("../../../../assets/close.png")} />} */}
            {/* <Spacer position="left" size="large" > */}
              {/* {isOpenNow && <Status source={require("../../../../assets/open.png")} />} */}
            {/* </Spacer>
            <Spacer position="left" size="large" />
            <Spacer position="top" size="small"> */}
              {/* <PrepTime source={{ uri: icon }} /> */}
            {/* </Spacer> */}
            <Icon name="time" size={20}></Icon> 
            <Text>{recipe.readyInMinutes} Mins</Text>
          </SectionEnd>
        </Section>
        {/* <Text>{address}</Text> */}
      </Info>

    </RecipeCard>
  )
};