import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from '../../api';
import getSkills from '../../api/getSkills';

import { setLoading, setSkills } from './actions';
import { ActionTypes, FetchSkillsAction, State } from './types';

function* fetchSkillsSaga({ payload }: FetchSkillsAction) {
  try {
    yield put(setLoading());

    const response: State['data'] = yield call(() => api(getSkills, undefined, payload));

    yield put(setSkills(response));
  } catch (e) {
    // TODO handle errorrs
  }
}

export function* skillsSaga() {
  yield takeEvery(ActionTypes.FETCH_SKILLS, fetchSkillsSaga);
}
