import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from 'src/api';
import postLogin from 'src/api/postLogin';

import { setLoading, setToken } from './actions';
import { ActionTypes, PostLoginAction } from './types';

function* postLoginSaga({ payload }: PostLoginAction) {
  try {
    yield put(setLoading());

    const response: string = yield call(() => api(postLogin, payload));

    yield put(setToken(response));
  } catch (e) {}
}

export function* authSaga() {
  yield takeEvery(ActionTypes.POST_LOGIN, postLoginSaga);
}
