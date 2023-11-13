import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from 'src/api';
import getProfile from 'src/api/getProfile';

import { setProfile } from './actions';
import { ActionTypes, Profile } from './types';

function* fetchProfileSaga() {
  try {
    const response: Profile = yield call(() => api(getProfile));

    yield put(setProfile(response));
  } catch (e) {}
}

export function* profileSaga() {
  yield takeEvery(ActionTypes.FETCH_PROFILE, fetchProfileSaga);
}
