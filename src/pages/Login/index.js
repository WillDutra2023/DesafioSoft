import React, {Component} from 'react';

//import {Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LoginActions} from '~/store/ducks/login';

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

class Login extends Component {
  state = {
    disabled: true,
  };

  getUserText = text => {
    let isUpperCase = false;
    [...text].forEach(element => {
      if (element == element.toUpperCase()) {
        isUpperCase = true;
        return;
      }
    });

    this.setState({
      disabled: isUpperCase,
    });
  };

  goHome = async () => {
    const {disabled} = this.state;

    if (!disabled) {
      this.props.loginRequest(true);
    }
  };

  render() {
    const {disabled} = this.state;
    const {logado} = this.props;

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
          <TextInput
            placeholder="Digite seu nome"
            onChangeText={text => {
              this.getUserText(text);
            }}
          />
          <TouchableOpacity disabled={disabled} onPress={() => this.goHome()}>
            <TextTouch>ENTRAR</TextTouch>
          </TouchableOpacity>
        </FormView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  logado: state.login.logado,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
