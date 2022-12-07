/* eslint-disable prettier/prettier */
import React from "react";
import {
  Alert,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../contexts/auth-context";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

const ProfileContainer = styled(View)`
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const InfoContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;

const LogoutButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[3]};
  border: 2px solid ${(props) => props.theme.colors.error};
  border-radius: 20px;
  background: ${(props) => props.theme.colors.error};
  width: 100%;
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.white};
`;

export const Profile = () => {
  const { user, logOut } = useAuth();

  const logOutAlert = () =>
    Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      {
        text: "NO",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "YES", onPress: logOut },
    ]);
  return (
    <>
      <SafeAreaView>
        <ProfileContainer>
          <Avatar.Icon size={150} icon="account" backgroundColor="#F96163" />
          <InfoContainer>
            <Text>{user.email}</Text>
          </InfoContainer>
          
          <LogoutButton onPress={logOutAlert}>
            <ButtonText>Log Out</ButtonText>
          </LogoutButton>
        </ProfileContainer>
      </SafeAreaView>
    </>
  );
};
