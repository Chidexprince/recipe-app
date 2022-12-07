/* eslint-disable prettier/prettier */
import React from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Favourite } from "../components/favourite";
import { List } from "react-native-paper";


const DetailContainer = styled(View)`
  flex: 1;
`;

const IconContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 9;
`;

const ImageContainer = styled(View)`
  margin: 0;
  background: ${(props) => props.theme.colors.white};
`;

const RecipeImage = styled(Image)`
  width: 100%;
  height: 300px;
`;

const TitleContainer = styled(View)`
  flex: 1;
`;

const RecipeTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primaryText};
`;

const RecipeContainer = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  background: ${(props) => props.theme.colors.white};
`;

const Section = styled(View)`
  flex: 1;
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]};
`;


export const RecipeDetail = ({ navigation, route }) => {
  // const { loading, recipe, getRecipeById } = useRecipe();
  // console.log(navigation, 'nav');
  // console.log(route.params.recipe, 'rou');
  const recipe = route.params.recipe;

  // useEffect(() => {
  //     getRecipeById(route.params.recipe.id);
  //     console.log(recipe);
  // }, [route.params.recipe.id])

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <DetailContainer>
            <IconContainer onPress={() => navigation.goBack()}>
              <Icon name="close-circle-outline" size={24} />
            </IconContainer>
            <Favourite recipe={recipe} />

            <ImageContainer>
              <RecipeImage source={{ uri: recipe.image }} />
            </ImageContainer>

            <RecipeContainer>
              <Section>
                <Icon name="stopwatch-outline" size={20}></Icon>
                <Text>{recipe.readyInMinutes} Mins</Text>
                <Icon name="fast-food-outline" size={20}></Icon>
                <Text>{recipe.servings} Servings</Text>
              </Section>

              <TitleContainer>
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </TitleContainer>

              <List.Section>
                <List.Accordion
                  title="Directions"
                  expanded={expanded}
                  onPress={handlePress}
                  left={(props) => (
                    <List.Icon {...props} icon="file-document-outline" />
                  )}
                >
                  {recipe.analyzedInstructions[0].steps.map((step) => (
                    <>
                      <List.Item
                        key={step.number}
                        title={step.step}
                        left={(props) => (
                          <List.Icon {...props} icon="pin-outline" />
                        )}
                      />
                    </>
                  ))}
                </List.Accordion>
              </List.Section>
            </RecipeContainer>
          </DetailContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
