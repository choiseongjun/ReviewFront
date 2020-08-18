import client from "./client";


//웹리스트 조회
export const weblist = ({pageNumber,mCode,searchParam}) => client.get(`/web/serviceList/`+mCode+`?page=`+pageNumber+`&appYn=Y&searchParam=`+searchParam);
//export const weblist = ({pageNumber,mCode}) => (console.log("mCode!@@@"+mCode));