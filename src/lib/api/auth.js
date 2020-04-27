import client from "./client";

export const login = ({ id, password }) =>
  client.post(`/auth/login`, { id, password });

export const register = ({ id, nickname, password }) =>
  client.post(`/auth/register`, { id, nickname, password });

//로그인상태 확인
export const check = () => client.get(`/auth/check`);

export const logout = () => client.post(`/auth/logout`);
