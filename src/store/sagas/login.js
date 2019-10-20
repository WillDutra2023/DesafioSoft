/* eslint-disable quote-props */
import { put } from 'redux-saga/effects';

import { saveLogado } from '~/asyncStorage';
import  { navigate } from '~/services/navigation';

import { Creators as LoginActions } from '~/store/ducks/login';

export function* login(action) {

  saveLogado(action.payload);
  navigate('Home'); // redireciona para proxima tela
  yield put(LoginActions.loginSucess(action.payload));


}
