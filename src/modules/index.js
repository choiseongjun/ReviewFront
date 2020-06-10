import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import weblist,{ weblistSaga } from "./weblist";
import service, { serviceSaga } from "./service";
import serviceDetail,{ serviceDetailSagaLatest } from "./serviceDetail";

const rootReducer = combineReducers({
  auth,
  weblist,
  serviceDetail
});


export function* rootSaga() {
  yield all([authSaga(), weblistSaga(), serviceSaga(), serviceDetailSagaLatest()]);
}

export default rootReducer;
