import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as replyApi from "../lib/api/reply";

const [REPLY_DETAIL, REPLY_DETAIL_SUCCESS, REPLY_DETAIL_FAILURE] = createRequestActionTypes(
  "web/REPLY",
);
//action
export const initalizeReply = (id) => {
  replyApi.setId(id);
  return {
    type: REPLY_DETAIL,
  }
};

const replySaga = createRequestSaga(REPLY_DETAIL, replyApi.reply);

export function* replySagaLatest() {
  yield takeLatest(REPLY_DETAIL, replySaga);
}
const initialState = {
  reply: null,
  replyError: "",
};
//reducer
const reply = (state = initialState, action) => {

  switch (action.type) {
    case REPLY_DETAIL_SUCCESS:
      return {
        ...state,
        reply: action.payload,
      };
    case REPLY_DETAIL_FAILURE:
      return {
        ...state,
        replyError: action.payload.error,
      };
    default:
      return state;
  }
};
export default reply;
