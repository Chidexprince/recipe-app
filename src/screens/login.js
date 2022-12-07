/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { APP_PAGES } from '../constants/app-pages';
import { useAuth } from "../contexts/auth-context";

const Container = styled.View`
  background: ${(props) => props.theme.colors.white};
`;


const ImageContainer = styled.View`
    padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
    height: 300px;
    background: ${(props) => props.theme.colors.white};
`;

const LoginImage = styled.Image`
    width: 100%;
    height: 300px;
`;

const LoginContainer = styled.View`
    padding: ${(props) => props.theme.space[5]} ${(props) => props.theme.space[3]};
    border-radius: 40px;
    height: 500px;
`;

const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin: ${(props) => props.theme.space[3]} 0;
`;

const Label = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.body};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-bottom: ${(props) => props.theme.space[1]};
    color: ${(props) => props.theme.colors.primaryText};
`;

const Input = styled(TextInput)`
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.colors.tertiaryBg};
    margin-bottom: ${(props) => props.theme.space[2]};
    border-radius: 3px;
`;

const LoginButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[3]};
  border: 2px solid ${(props) => props.theme.colors.primaryBg};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.primaryBg};
  width: 100%;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.white};
`;


const LinkContainer = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
  align-items: center;
`;

const Link = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.primaryBg};
`;

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  margin: ${(props) => props.theme.space[2]};
`;

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, loginUser, } = useAuth();

    return (
      <>
        <SafeAreaView>
          <Container>
          <ImageContainer>
            <LoginImage source={require('../../assets/sign-in.png')} />
          </ImageContainer>
          <LoginContainer>
          {loading && (
            <LoadingContainer>
              <ActivityIndicator size={50} animating={true} color="#F96163" />
            </LoadingContainer>
          )}
            <Title>Sign In</Title>
            <Label>Email</Label>
            <Input 
              placeholder="Enter your email"
              keyboardType="email-address" 
              value={email}
              onChangeText={(e) => setEmail(e)}
              />
            <Label>Password</Label>
            <Input 
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => setPassword(e)}
               />
            <LoginButton
              onPress={() => loginUser(email, password)}>
              <ButtonText>Sign In</ButtonText>
            </LoginButton>
            <LinkContainer>
              <Text>New to RecipQ? 
                <Link onPress={() =>
                        navigation.navigate(APP_PAGES.REGISTER)
                      }>
                  Sign up
                </Link>
              </Text>
            </LinkContainer>
          </LoginContainer>
          </Container>
        </SafeAreaView>
      </>
    );
}