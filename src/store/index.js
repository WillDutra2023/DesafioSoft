import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './ducks';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSagas);

export default store;
