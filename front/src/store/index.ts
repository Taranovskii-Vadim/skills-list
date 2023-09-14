import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { categoriesReducer } from './categories';

import { categoriesSaga } from './categories/saga';

const rootReducer = combineReducers({ categories: categoriesReducer });

function* rootSaga() {
  yield all([categoriesSaga()]);
}

const sagaMiddlewate = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlewate));

sagaMiddlewate.run(rootSaga);
