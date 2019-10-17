/* eslint-disable quote-props */
import { call, put, all } from 'redux-saga/effects';

import { requestBanner, requestBlog, requestMarca } from '~/webService';

import { Creators as HomeActions } from '~/store/ducks/home';

export function* request() {
  try {
    const [banner, marca, blog] = yield all([
      call(requestBanner),
      call(requestMarca),
      call(requestBlog),
    ]);
    yield put(HomeActions.requestSucess(banner.data, marca.data, blog.data));
  } catch (error) {
    console.log(error);
    yield put(HomeActions.requestError(error));
  }
}

// export function* banner() {
//   try {
//     const response = yield call(requestBanner);
//     yield put(HomeActions.bannerSucess(response.data));
//   } catch (error) {
//     const msgError = error.response.data.erro;
//     yield put(HomeActions.requestError(msgError));
//   }
// }

// export function* marca() {
//   try {
//     const response = yield call(requestMarca);
//     yield put(HomeActions.marcaSucess(response.data));
//   } catch (error) {
//     const msgError = error.response.data.erro;
//     yield put(HomeActions.requestError(msgError));
//   }
// }

// export function* blog() {
//   try {
//     const response = yield call(requestBlog);
//     yield put(HomeActions.blogSucess(response.data));
//   } catch (error) {
//     const msgError = error.response.data.erro;
//     yield put(HomeActions.requestError(msgError));
//   }
// }
