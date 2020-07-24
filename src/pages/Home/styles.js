import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #333;
  border-width: 1px;
  border-color: #cecece;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const List = styled.FlatList`
  flex-grow: 1;
  padding: 20px;
`;
