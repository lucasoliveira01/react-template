import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Details = ({ navigation }) => {
  const { id } = navigation.state.params;

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Details;
