//здесь запрос на сервер обрабатывается, когда отправляется и когда вернется
import { put } from "@redux-saga/core/effects";
import * as API from "../api";
import * as UserActionCreators from "../actions/userCreators";
export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.userData); //запрос на сервер, асинхронно
    const {
      data: { data: user },
    } = response;
    yield put(UserActionCreators.createUserSuccess(user));
  } catch (err) {
    yield put(UserActionCreators.createUserSuccess(err));
  }
}
