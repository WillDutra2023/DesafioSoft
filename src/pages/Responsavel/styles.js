import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
export const Container = styled.View`
  flex: 1;
  background: white ;

`;

export const Text = styled.Text`
  font-size: 16;
  margin-left: 10;
  margin-bottom: 10;
`;

export const ViewMap = styled.View`
  flex: 1;
`;

export const styles = StyleSheet.create({
  maps: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
