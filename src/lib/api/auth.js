import client from "./client";

export const login = ({ userid, password }) =>
  client.post(`/api/auth/signin`, { userid, password });

//시큐리티 권한문제로 인한 디폴트값
const role = ["user"];
export const register = ({ userid, email, name, password }) =>
  client.post(`/api/auth/signup`, { userid, email, name, role, password });

//로그인상태 확인
export const check = () => client.get(`/auth/check`);

export const logout = () => client.post(`/auth/logout`);
