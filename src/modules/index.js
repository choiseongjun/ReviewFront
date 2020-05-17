import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import weblist,{ weblistSaga } from "./weblist";

const rootReducer = combineReducers({
  auth,
  weblist
});

export function* rootSaga() {
  yield all([authSaga(),weblistSaga()]);
}

export default rootReducer;
