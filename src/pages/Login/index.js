import React, {Component} from 'react';

import {Text} from 'react-native';

import {
  Container,
  HeaderView,
  TextHeader,
  ImageView,
  FormView,
  Image,
  TextTitleInput,
  TextInput,
  TouchableOpacity,
  TextTouch,
} from './styles';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <HeaderView>
          <TextHeader>TAREFA FÁCIL</TextHeader>
        </HeaderView>
        <ImageView>
          <Image source={require('~/images/tarefa.png')} />
        </ImageView>
        <FormView>
          <TextTitleInput>Nome</TextTitleInput>
          <TextInput placeholder="Digite seu nome" />
          <TouchableOpacity>
            <TextTouch>ENTRAR</TextTouch>
          </TouchableOpacity>
        </FormView>
      </Container>
    );
  }
}
