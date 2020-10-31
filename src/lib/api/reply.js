import axios from 'axios'

var id;
export const setId = (num) => id = num;

// 댓글 조회
export const reply = () => axios.get(`/web/reply/${id}`);