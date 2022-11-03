/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
import styled from "styled-components/native";


const ImageContainer = styled.View`
    padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[3]};
    height: 400px;
`;

const LoginImage = styled.Image`
    width: 100%;
    height: 300px;
`;

const LoginContainer = styled.View`
    padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[3]};
    background: ${(props) => props.theme.colors.primaryBg};
    border-radius: 40px;
    height: 500px;
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: ${(props) => props.theme.space[2]};
    color: ${(props) => props.theme.colors.white};
`;

const SubTitle = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.white};
`;

const Label = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-bottom: ${(props) => props.theme.space[1]};
    color: ${(props) => props.theme.colors.white};
`;

const Input = styled(TextInput)`
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.colors.tertiaryBg};
    margin-bottom: ${(props) => props.theme.space[2]};
    border-radius: 3px;
`;

const LoginButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[3]};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.primaryBg};
`;


export const ForgotPassword = () => {
    return (
      <>
        <SafeAreaView>
          <ImageContainer>
            <LoginImage source={require('../../assets/reset-password.png')} />
          </ImageContainer>
          <LoginContainer>
            <Title>Forgot Password</Title>
            <SubTitle>Enter the email address associated with your account</SubTitle>
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <LoginButton>
              <ButtonText>Submit</ButtonText>
            </LoginButton>
          </LoginContainer>
        </SafeAreaView>
      </>
    );
}