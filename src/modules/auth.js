import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

//action type
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN",
);
const INPUT = "auth/INPUT";
const REGISTER = "auth/REGISTER";

//action
export const login = ({ userid, password }) => ({
  type: LOGIN,
  userid,
  password,
});
export const input = ({ key, value }) => ({ type: INPUT, key, value });

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  login: {
    userid: "",
    password: "",
  },
  auth: "",
  authError: "",
};

//reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        login: { ...state.login, [action.key]: action.value },
      };
    case LOGIN_SUCCESS:
      console.log(state, action);
      return {
        ...state,
        auth: state.auth,
      };
    case LOGIN_FAILURE:
      console.log(state, action);
      return {
        ...state,
        authError: state.authError,
      };
    default:
      return state;
  }
};

export default auth;
