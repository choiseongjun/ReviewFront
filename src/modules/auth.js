//action type
const LOGIN = "auth/LOGIN";
const INPUT = "auth/INPUT";
const REGISTER = "auth/REGISTER";

//action
export const login = ({ id, password }) => ({ type: LOGIN, id, password });
export const input = ({ key, value }) => ({ type: INPUT, key, value });

const initialState = {
  login: {
    id: "",
    password: "",
  },
};

//reducer
const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, id: state.login.id, password: state.login.password };
    case INPUT:
      return {
        ...state,
        login: { ...state.login, [action.key]: action.value },
      };
    default:
      return state;
  }
};

export default auth;
