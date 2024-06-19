import { takeEvery, call, put, all } from "redux-saga/effects";

import { api } from "src/api";
import getSkills from "src/api/getSkills";
import postSkill from "src/api/postSkill";
import patchSkill from "src/api/patchSkill";
import getSkillLogo from "src/api/getSkillLogo";
import postSkillLogo from "src/api/postSkillLogo";

import { setLoading, setSkill, setSkills, updateSkill } from "./actions";
import {
  ActionTypes,
  FetchSkillsAction,
  PatchSkillAction,
  PostSkillAction,
  Skill,
  State,
} from "./types";

function* fetchSkillsSaga({ payload }: FetchSkillsAction) {
  try {
    yield put(setLoading());

    const response: State["data"] = yield call(() =>
      api(getSkills, undefined, payload.toString())
    );

    const result: State["data"] = yield all(
      response.map(function* (item) {
        const logo: string = item.logo
          ? yield call(() => api(getSkillLogo, undefined, item.logo, "blob"))
          : "";

        return { ...item, logo };
      })
    );

    yield put(setSkills(result));
  } catch (e) {}
}

function* patchSkillSaga({ payload }: PatchSkillAction) {
  try {
    const { id, ...body } = payload;

    yield put(updateSkill(payload));
    yield call(() => api(patchSkill, body, id.toString()));
  } catch (e) {}
}

function* postSkillSaga({ payload: { file, ...other } }: PostSkillAction) {
  try {
    let logo: Skill["logo"] = "";

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      logo = yield call(() => api(postSkillLogo, formData));
    }

    const response: Omit<Skill, "logo"> = yield call(() =>
      api(postSkill, { logo, ...other })
    );

    yield put(
      setSkill({ ...response, logo: file ? URL.createObjectURL(file) : "" })
    );
  } catch (e) {}
}

export function* skillsSaga() {
  yield takeEvery(ActionTypes.POST_SKILL, postSkillSaga);
  yield takeEvery(ActionTypes.PATCH_SKILL, patchSkillSaga);
  yield takeEvery(ActionTypes.FETCH_SKILLS, fetchSkillsSaga);
}
