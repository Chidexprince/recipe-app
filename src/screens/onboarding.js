/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, SafeAreaView, Image } from "react-native";
import styled from "styled-components/native";
import { APP_PAGES } from '../constants/app-pages';

const Container = styled.View`
    flex: 1;
    background: ${(props) => props.theme.colors.primaryBg};
    padding-top: ${(props) => props.theme.space[4]};
`;

const ImageContainer = styled.View`
    background: ${(props) => props.theme.colors.primaryBg};
    height: 500px;
`;

const OnboardImage = styled.Image`
    width: 100%;
    height: 400px;
`;

const ActionContainer = styled.View`
    background: ${(props) => props.theme.colors.white};
    padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[3]};
    height: 300px;
    border-radius: 40px;
`;

const Title = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.title};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

const SubTitle = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-bottom: ${(props) => props.theme.space[4]};
`;

const OnboardButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[3]};
  border: 2px solid ${(props) => props.theme.colors.primaryBg};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.primaryBg};
  width: 100%;
  align-items: center;
`;

const ButtonText = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.white};
`;



export const Onboarding = ({ navigation }) => {
    return (
      <>
        <SafeAreaView>
            <Container>
                <ImageContainer>
                    <OnboardImage source={require('../../assets/onboarding.png')} />
                </ImageContainer>

                <ActionContainer>
                    <Title>Get Started</Title>
                    <SubTitle>Learn all the recipes you need to make great dishes.</SubTitle>
                    <OnboardButton
                     onPress={() =>
                        navigation.navigate(APP_PAGES.LOGIN)
                      }>
                        <ButtonText>Get Started</ButtonText>
                    </OnboardButton>
                </ActionContainer>
            </Container>
        </SafeAreaView>
     </>
    )
}