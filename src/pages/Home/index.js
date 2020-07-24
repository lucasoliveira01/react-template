import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, TextButton, List } from './styles';

const array = [
  {
    id: 1,
    nome: 'Lucas',
  },
  {
    id: 2,
    nome: 'Leo',
  },
  {
    id: 3,
    nome: 'Feliporn',
  },
  {
    id: 4,
    nome: 'Korsa',
  },
  {
    id: 5,
    nome: 'Dragao',
  },
];

const Home = ({ navigation }) => {
  const handleToDetails = ({ id }) => {
    navigation.navigate('Details', {
      id,
    });
  };

  const handleToNewRequest = () => {
    navigation.navigate('NewRequest');
  };

  return (
    <Container>
      <List
        keyExtractor={(item) => item.id}
        data={array}
        renderItem={({ item }) => (
          <Button onPress={() => handleToDetails(item)}>
            <TextButton>{item.nome}</TextButton>
          </Button>
        )}
      />

      {/* <Button onPress={handleToNewRequest}>
        <TextButton>Nova Solicitação</TextButton>
      </Button> */}
    </Container>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
