import axios from "axios";

var id;
export const setId = (num) => id = num;

// 서비스 상세 조회
export const serviceDetail = () => axios.get(`/web/service/${id}`);