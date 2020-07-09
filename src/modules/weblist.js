import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as weblistAPI from "../lib/api/weblist";

const [WEBLIST, WEBLIST_SUCCESS, WEBLIST_FAILURE] = createRequestActionTypes(
  "web/WEBLIST",
);
//action
export const initalizeWebList = (pageNumber) => ({
  type: WEBLIST,
  pageNumber
});
const weblistsaga = createRequestSaga(WEBLIST, weblistAPI.weblist);

export function* weblistSaga() {
  yield takeLatest(WEBLIST, weblistsaga);
}
const initialState = {
  weblist:{
    pageNumber:0,
  },
  
  webpage: null,
  weblistError: "",
  totalPages: 0,
  totalElements:0,
  number:0,
  
};
//reducer
const weblist = (state = initialState, action) => {
 

  switch (action.type) {
    case WEBLIST_SUCCESS:
      return {
        ...state,
        weblist: action.payload.weblists.content,
        totalElements: action.payload.weblists.totalElements,
        totalPages: action.payload.weblists.totalPages,
        size: action.payload.weblists.size,
        number: action.payload.weblists.number,
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
