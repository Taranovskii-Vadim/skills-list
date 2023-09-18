import { takeEvery, call, put } from 'redux-saga/effects';

import { setCategories } from './actions';
import { ActionTypes, State } from './types';

async function mockGetRequest(): Promise<State['data']> {
  const response = await fetch('http://localhost:3000/api/categories');
  const data = await response.json();

  return data;
}

function* fetchCategoriesSaga() {
  try {
    const response: State['data'] = yield call(mockGetRequest);

    yield put(setCategories(response));
  } catch (e) {
    // TODO handle errorrs
  }
}

export function* categoriesSaga() {
  yield takeEvery(ActionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
}
