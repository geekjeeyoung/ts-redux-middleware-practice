import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { getUserProfile, GithubProfile } from "../../api/github";
import { call, put, takeEvery } from "redux-saga/effects";
import createAsyncSaga from "../../lib/createAsyncSaga";

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
