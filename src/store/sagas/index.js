/* eslint-disable quote-props */
import {takeLatest, all, takeEvery} from 'redux-saga/effects';

import {Types as LoginTypes} from '~/store/ducks/login';
import {Types as HomeTypes} from '~/store/ducks/home';

import {login} from './login';
import {request} from './home';
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
