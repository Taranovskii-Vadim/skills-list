import axios from 'axios';
import { takeEvery, call, put, all } from 'redux-saga/effects';

import { api } from '../../api';
import getSkills from '../../api/getSkills';
import postSkill from '../../api/postSkill';
import patchSkill from '../../api/patchSkill';
import getSkillLogo from '../../api/getSkillLogo';
import postSkillLogo from '../../api/postSkillLogo';

import { setLoading, setSkill, setSkills, updateSkill } from './actions';
import { ActionTypes, FetchSkillsAction, PatchSkillAction, PostSkillAction, Skill, State } from './types';

function* fetchSkillsSaga({ payload }: FetchSkillsAction) {
  try {
    yield put(setLoading());

    const response: State['data'] = yield call(() => api(getSkills, undefined, payload.toString()));

    // TODO try refactor api config
    // const result: State['data'] = yield all(
    //   response.map((item) => ({ ...item, logo: call(() => api(getSkillLogo, undefined, item.logo)) })),
    // );

    const result: State['data'] = yield all(
      response.map(async (item) => {
        const { data } = await axios.get(`http://localhost:3000/api/skills/logo/${item.logo}`, {
          responseType: 'blob',
        });

        return { ...item, logo: URL.createObjectURL(data) };
      }),
    );

    yield put(setSkills(result));
  } catch (e) {
    // TODO handle errorrs
  }
}

function* patchSkillSaga({ payload }: PatchSkillAction) {
  try {
    const { id, ...body } = payload;

    yield put(updateSkill(payload));
    yield call(() => api(patchSkill, body, id.toString()));
  } catch (e) {
    // TODO handle errorrs
  }
}

function* postSkillSaga({ payload: { file, ...other } }: PostSkillAction) {
  try {
    let logo: Skill['logo'] = '';

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      logo = yield call(() => api(postSkillLogo, formData));
    }

    const response: Omit<Skill, 'logo'> = yield call(() => api(postSkill, { logo, ...other }));

    yield put(setSkill({ ...response, logo: file ? URL.createObjectURL(file) : '' }));
  } catch (e) {
    // TODO handle errorrs
  }
}

export function* skillsSaga() {
  yield takeEvery(ActionTypes.POST_SKILL, postSkillSaga);
  yield takeEvery(ActionTypes.PATCH_SKILL, patchSkillSaga);
  yield takeEvery(ActionTypes.FETCH_SKILLS, fetchSkillsSaga);
}
