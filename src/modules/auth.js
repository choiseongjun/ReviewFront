import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

//action type
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN",
);
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "auth/REGISTER",
);
const LOGOUT = "auth/LOGOUT";
const SET_USER = "auth/SET_USER";
const MODAL_STATE = "auth/MODAL_STATE";
const CHANGE_FILED = "auth/CHANGE_FILED";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

//action
export const register = ({ userid, email, name, password }) => ({
  type: REGISTER,
  userid,
  email,
  name,
  password,
});

export const login = ({ userid, password }) => ({
  type: LOGIN,
  userid,
  password,
});

export const logout = () => ({ type: LOGOUT });

export const modalState = (state) => ({ type: MODAL_STATE, state });

export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FILED,
  form,
  key,
  value,
});
export const initalizeForm = (form) => ({ type: INITIALIZE_FORM, form });

export const setUser = (auth) => ({ type: SET_USER, auth });

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  register: {
    userid: "",
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    userid: "",
    password: "",
  },
  auth: "",
  authError: "",
  modal_state: false,
};

//reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload.accessToken,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authError: action.payload.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        role:action.payload.ROLE,
        auth: action.payload.jwt,
      };
    case LOGIN_FAILURE:
      alert("아이디 또는 비밀번호를 확인해주세요");
      return {
        ...state,
        authError: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        auth: "",
      };
    case SET_USER:
      return {
        ...state,
        auth: action.auth,
      };
    case MODAL_STATE:
      return {
        ...state,
        modal_state: action.state,
      };
    case CHANGE_FILED:
      return {
        ...state,
        [action.form]: { ...state[action.form], [action.key]: action.value },
      };
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.form]: initalizeForm[action.form],
      };
    default:
      return state;
  }
};

export default auth;
