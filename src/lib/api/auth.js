import axios from 'axios';

export const login = ({ userid, password }) =>
axios.post(`/api/auth/signin`, { userid, password });

//시큐리티 권한문제로 인한 디폴트값
const role = ["user"];
export const register = ({ userid, email, name, password }) =>
axios.post(`/api/auth/signup`, { userid, email, name, role, password });

//로그인상태 확인
export const check = () => axios.get(`/auth/check`);

export const logout = () => axios.post(`/auth/logout`);
