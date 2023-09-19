import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { skills } from './skills';
import { categories } from './categories';

import { skillsSaga } from './skills/saga';
import { categoriesSaga } from './categories/saga';

const rootReducer = combineReducers({ categories, skills });

function* rootSaga() {
  yield all([categoriesSaga(), skillsSaga()]);
}

const sagaMiddlewate = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlewate));

sagaMiddlewate.run(rootSaga);
