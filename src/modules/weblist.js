import createRequestSaga, {
    createRequestActionTypes,
  } from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as weblistAPI from "../lib/api/weblist";

const [WEBLIST, WEBLIST_SUCCESS, WEBLIST_FAILURE] = createRequestActionTypes(
    "web/WEBLIST",
  );
//action
export const initalizeWebList = () => ({
    type: WEBLIST,
  });
const weblistsaga = createRequestSaga(WEBLIST,weblistAPI.weblist);

export function* weblistSaga() {
    yield takeLatest(WEBLIST, weblistsaga);
}
const initialState = {
    weblist: {
      file_name: "",
      title: "",
    },
    weblistError:"",
  };
//reducer
const weblist = (state = initialState, action) => {
  
    switch (action.type) {
      case WEBLIST_SUCCESS:
        return {
          ...state,
          weblist: weblist,
        };
        case WEBLIST_FAILURE:
        return {
            ...state,
            weblistError: action.payload.error,
        };
        default:
            return state;
    }
}
export default weblist;