import { call, put } from "redux-saga/effects";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action) {
    try {
      console.log("action", action);
      const response = yield call(request, action);
      yield put({
        type: SUCCESS,
        payload: Array.isArray(response.data.content) ? response.data.content : response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
  };
}
