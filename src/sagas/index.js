import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionsType";
import { createUserSaga } from "./usersSagas";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
}

export default rootSaga;
