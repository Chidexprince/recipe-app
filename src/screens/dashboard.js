/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const LeftContent = props => <Avatar.Icon {...props} icon="comment-plus" />;

export const Dashboard = () => {
  return (
    <>
      <SafeAreaView>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

        <Icon name='heart-outline' size={30} color="#900" />

        <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon  icon="folder" />}
    />
  </List.Section>
      </SafeAreaView>
    </>
  );
};
