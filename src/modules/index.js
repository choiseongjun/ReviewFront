import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import weblist, { weblistSaga } from "./weblist";
import service, { serviceSaga } from "./service";

const rootReducer = combineReducers({
  auth,
  weblist,
  service,
});

export function* rootSaga() {
  yield all([authSaga(), weblistSaga(), serviceSaga()]);
}

export default rootReducer;
