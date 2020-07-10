import client from "./client";


//웹리스트 조회
export const weblist = ({pageNumber,mCode}) => client.get(`/web/serviceList/`+mCode+`?page=`+pageNumber);
//export const weblist = ({pageNumber,mCode}) => (console.log("mCode!@@@"+mCode));