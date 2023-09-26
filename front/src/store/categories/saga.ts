import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from 'src/api';
import getCategories from 'src/api/getCategories';

import { setCategories } from './actions';
import { ActionTypes, State } from './types';

function* fetchCategoriesSaga() {
  try {
    // TODO there was a way to import api in index file to avoid import api in each saga file
    const response: State['data'] = yield call(() => api(getCategories));

    yield put(setCategories(response));
  } catch (e) {}
}

export function* categoriesSaga() {
  yield takeEvery(ActionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
}
