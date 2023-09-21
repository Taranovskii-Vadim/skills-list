import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from '../../api';
import getSkills from '../../api/getSkills';
import patchSkill from '../../api/patchSkill';

import { setLoading, setSkills, updateSkill } from './actions';
import { ActionTypes, FetchSkillsAction, PatchSkillAction, State } from './types';

function* fetchSkillsSaga({ payload }: FetchSkillsAction) {
  try {
    yield put(setLoading());

    const response: State['data'] = yield call(() => api(getSkills, undefined, payload));

    yield put(setSkills(response));
  } catch (e) {
    // TODO handle errorrs
  }
}

function* patchSkillSaga({ payload }: PatchSkillAction) {
  try {
    const { id, ...body } = payload;

    yield put(updateSkill(payload));
    yield call(() => api(patchSkill, body, id));
  } catch (e) {
    // TODO handle errorrs
  }
}

export function* skillsSaga() {
  yield takeEvery(ActionTypes.PATCH_SKILL, patchSkillSaga);
  yield takeEvery(ActionTypes.FETCH_SKILLS, fetchSkillsSaga);
}
