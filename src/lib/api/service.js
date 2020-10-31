import axios from 'axios';

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
/* @Params
title:string,
content:string,
url?:string,
companyname?:string,
categoryname:string,
app_yn,
web_yn,
file1:string,
file2:array,
*/
//this.$axios.setHeader("Content-Type", "multipart/form-data", ["post"]);
export const register = ({
  title,
  content,
  url,
  companyname,
  mcode,
  mobile_yn,
  web_yn,
  file1,
  file2,
}) =>
axios.post(
    `/web/service`,
    {
      title,
      content,
      url,
      companyname,
      mcode,
      mobile_yn,
      web_yn,
      file1,
      file2,
    },
    config,
  );
