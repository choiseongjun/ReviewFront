import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

//action type
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "auth/LOGIN",
);
const LOGOUT = "auth/LOGOUT";
const SET_USER = "auth/SET_USER";
const MODAL_STATE = "auth/MODAL_STATE";
const CHANGE_FILED = "auth/CHANGE_FILED";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

//action
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

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
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
    case LOGOUT:
      console.log(state, action);
      return {
        ...state,
        auth: "",
      };
    case SET_USER:
      console.log(state, action);
      return {
        ...state,
        auth: action.auth,
      };
    case MODAL_STATE:
      console.log(state, action);
      return {
        ...state,
        modal_state: action.state,
      };
    case CHANGE_FILED:
      console.log("changeField: ", state, "action :", action);
      return {
        ...state,
        [action.form]: { ...state[action.form], [action.key]: action.value },
      };
    case INITIALIZE_FORM:
      console.log(state, action);
      return {
        ...state,
        [action.form]: initalizeForm[action.form],
      };
    default:
      return state;
  }
};

export default auth;
