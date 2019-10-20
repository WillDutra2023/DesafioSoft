/* eslint-disable quote-props */
import { takeLatest, all } from 'redux-saga/effects';

import { Types as HomeTypes } from '~/store/ducks/home';
import { Types as LoginTypes } from '~/store/ducks/login';

import { login } from './login';
import { request } from './home';

export default function* rootSaga() {
  try {
    yield all([
      takeLatest(LoginTypes.REQUEST, login),
      takeLatest(HomeTypes.REQUEST, request),
    ]);
  } catch (error) {
    console.log('ERROR ROOTSAGA ', error);
  }
}
