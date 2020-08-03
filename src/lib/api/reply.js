import client from "./client";

var id;
export const setId = (num) => id = num;

// 댓글 조회
export const reply = () => client.get(`/web/reply/${id}`);