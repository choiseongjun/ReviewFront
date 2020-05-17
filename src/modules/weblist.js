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
const weblistsaga = createRequestSaga(WEBLIST, weblistAPI.weblist);

export function* weblistSaga() {
  yield takeLatest(WEBLIST, weblistsaga);
}
const initialState = {
  weblist: null,
  weblistError: "",
};
//reducer
const weblist = (state = initialState, action) => {
  console.log("action");
  console.log(action);

  switch (action.type) {
    case WEBLIST_SUCCESS:
      console.log("suc", state, action);
      return {
        ...state,
        weblist: action.payload,
      };
    case WEBLIST_FAILURE:
      return {
        ...state,
        weblistError: action.payload.error,
      };
    default:
      return state;
  }
};
export default weblist;
