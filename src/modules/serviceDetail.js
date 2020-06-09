import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as serviceDetailApi from "../lib/api/serviceDetail";

const [SERVICE_DETAIL, SERVICE_DETAIL_SUCCESS, SERVICE_DETAIL_FAILURE] = createRequestActionTypes(
  "web/SERVICE",
);
//action
export const initalizeServiceDetail = (id) => {
  serviceDetailApi.setId(id);
  return {
    type: SERVICE_DETAIL,
  }
};

const serviceDetailSaga = createRequestSaga(SERVICE_DETAIL, serviceDetailApi.serviceDetail);

export function* serviceDetailSagaLatest() {
  yield takeLatest(SERVICE_DETAIL, serviceDetailSaga);
}
const initialState = {
  serviceDetail: null,
  serviceDetailError: "",
};
//reducer
const serviceDetail = (state = initialState, action) => {

  switch (action.type) {
    case SERVICE_DETAIL_SUCCESS:
      return {
        ...state,
        serviceDetail: action.payload,
      };
    case SERVICE_DETAIL_FAILURE:
      return {
        ...state,
        serviceDetailError: action.payload.error,
      };
    default:
      return state;
  }
};
export default serviceDetail;
