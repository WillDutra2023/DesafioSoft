import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 25;
  color: gray;
  font-weight: bold;
`;

export const ImageView = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 300;
  height: 300;
`;

export const FormView = styled.View`
  flex: 2;
  margin-left: 12;
  margin-right: 12;
  justify-content: center;
`;

export const TextTitleInput = styled.Text`
  font-size: 16;
  color: gray;
`;

export const TextInput = styled.TextInput`
  font-size: 18;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: green;
  height: 50;
  justify-content: center;
  align-items: center;
  margin-top: 20;
`;

export const TextTouch = styled.Text`
  font-size: 16;
  color: white;
`;
