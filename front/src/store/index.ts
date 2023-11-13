import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { auth } from './auth';
import { skills } from './skills';
import { profile } from './profile';
import { categories } from './categories';

import { authSaga } from './auth/saga';
import { skillsSaga } from './skills/saga';
import { profileSaga } from './profile/saga';
import { categoriesSaga } from './categories/saga';

const rootReducer = combineReducers({ auth, categories, skills, profile });

function* rootSaga() {
  yield all([categoriesSaga(), skillsSaga(), authSaga(), profileSaga()]);
}

const sagaMiddlewate = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlewate));

sagaMiddlewate.run(rootSaga);
