/* eslint-disable quote-props */
import { call, put } from 'redux-saga/effects';

import { requestLogin, requestEmail } from '~/webService';

import { saveLogado, saveCodigo } from '~/asyncStorage';
import { navigate } from '~/services/navigation';

import { Creators as LoginActions } from '~/store/ducks/login';

export function* login(action) {
  try {
    const response = yield call(requestLogin, action.payload);
    const { logado, codigo} = response.data;

    if (logado) {
      saveCodigo(codigo);
      saveLogado(logado);
    }

    yield put(LoginActions.loginSucess(response.data, logado));

    navigate('Home'); // redireciona para proxima tela
  } catch (error) {
    const msgError = error.response.data.erro;
    yield put(LoginActions.loginError(msgError));
  }
}

export function* sendEmailForget(action) {
  try {
    const response = yield call(requestEmail, action.payload);
    yield put(LoginActions.emailSucessEmail(response.data.enviado));

    // navigate(''); // redireciona para proxima tela
  } catch (error) {
    yield put(
      LoginActions.emailFailureEmail(error.response.data.motivo, error.response.data.enviado),
    );
  }
}
