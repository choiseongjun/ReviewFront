import client from "./client";

var id;
export const setId = (num) => id = num;

// 서비스 상세 조회
export const serviceDetail = () => client.get(`/web/service/${id}`);