import { takeEvery, call, put } from 'redux-saga/effects';

import { api } from '../../api';
import getSkills from '../../api/getSkills';
import postSkill from '../../api/postSkill';
import patchSkill from '../../api/patchSkill';
import postSkillLogo from '../../api/postSkillLogo';

import { setLoading, setSkill, setSkills, updateSkill } from './actions';
import { ActionTypes, FetchSkillsAction, PatchSkillAction, PostSkillAction, Skill, State } from './types';

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

function* postSkillSaga({ payload: { file, ...other } }: PostSkillAction) {
  try {
    // TODO fix to Skill['logo']
    let image: string | null = null;

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      image = yield call(() => api(postSkillLogo, formData));
    }

    console.log(image);

    const response: Skill = yield call(() => api(postSkill, other));

    yield put(setSkill(response));
  } catch (e) {
    // TODO handle errorrs
  }
}

export function* skillsSaga() {
  yield takeEvery(ActionTypes.POST_SKILL, postSkillSaga);
  yield takeEvery(ActionTypes.PATCH_SKILL, patchSkillSaga);
  yield takeEvery(ActionTypes.FETCH_SKILLS, fetchSkillsSaga);
}
