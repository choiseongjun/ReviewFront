import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

//action type
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN",
);

//action
export const login = ({ userid, password }) => ({
  type: LOGIN,
  userid,
  password,
});

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  auth: "",
  authError: "",
};

//reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        auth: action.payload.accessToken,
      };
    case LOGIN_FAILURE:
      console.log(state, action);
      return {
        ...state,
        authError: action.payload.error,
      };
    default:
      return state;
  }
};

export default auth;
