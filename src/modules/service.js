import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest, takeEvery } from "redux-saga/effects";
import * as serviceAPI from "../lib/api/service";

//action type
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  "service/REGISTER",
);
const CHANGE_INPUT = "service/CHANGE_INPUT";
const CHANGE_IMAGE = "service/CHANGE_IMAGE";
//action
export const changeInput = ({ key, value }) => ({
  type: CHANGE_INPUT,
  key,
  value,
});

export const changeImage = ({ file }) => (
  console.log(file),
  {
    type: CHANGE_IMAGE,
    file,
  }
);

export const register = ({
  title,
  content,
  url,
  companyname,
  categoryname,
  app_yn,
  web_yn,
  file1,
  file2,
}) => ({
  type: REGISTER,
  title,
  content,
  url,
  companyname,
  categoryname,
  app_yn,
  web_yn,
  file1,
  file2,
});

const registerSaga = createRequestSaga(REGISTER, serviceAPI.register);

export function* serviceSaga() {
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  form: {
    title: "",
    content: "",
    url: null,
    companyname: null,
    categoryname: "M01-01",
    app_yn: "N",
    web_yn: "N",
    file1: "",
    file2: [],
  },
};

//reducer
const service = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        form: { ...state.form, [action.key]: action.value },
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        form: { ...state.form, file1: action.file },
      };
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

    default:
      return state;
  }
};

export default service;
