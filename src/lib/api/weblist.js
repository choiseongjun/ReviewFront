import client from "./client";


//웹리스트 조회
export const weblist = ({pageNumber}) => client.get(`/web/service?page=`+pageNumber);