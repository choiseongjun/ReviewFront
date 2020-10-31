import axios from 'axios'


//웹리스트 조회
export const weblist = ({pageNumber,mCode,searchParam}) => axios.get(`/web/serviceList/`+mCode+`?page=`+pageNumber+`&appYn=Y&searchParam=`+searchParam);
//export const weblist = ({pageNumber,mCode}) => (console.log("mCode!@@@"+mCode));