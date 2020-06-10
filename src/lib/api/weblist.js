import client from "./client";


//웹리스트 조회
export const weblist = () => client.get(`/web/service`);