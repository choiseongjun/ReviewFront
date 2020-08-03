import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import weblist,{ weblistSaga } from "./weblist";
import service, { serviceSaga } from "./service";
import serviceDetail,{ serviceDetailSagaLatest } from "./serviceDetail";
import reply,{ replySagaLatest } from "./reply";

const rootReducer = combineReducers({
  auth,
  weblist,
  service,
  serviceDetail,
  reply
});


export function* rootSaga() {
  yield all([authSaga(), weblistSaga(), serviceSaga(), serviceDetailSagaLatest(), replySagaLatest()]);
}

export default rootReducer;
