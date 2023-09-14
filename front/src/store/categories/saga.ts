import { takeEvery, call, put } from 'redux-saga/effects';

import { setCategories } from './actions';
import { ActionTypes, State } from './types';

async function mockGetRequest(): Promise<State['data']> {
  return await Promise.resolve([
    { id: 0, title: 'frontend' },
    { id: 1, title: 'backend' },
    { id: 2, title: 'database' },
    { id: 3, title: 'common' },
  ]);
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
