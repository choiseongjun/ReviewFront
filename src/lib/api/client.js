import axios from "axios";

// axios.interceptors.request.use(function (config) {
//     console.log('interceptors')
//     const token = JSON.parse(sessionStorage.getItem("user"));
//     console.log(token)
    
//     config.headers.Authorization = `Bearer ${token}`;
//    // Authorization: `Bearer ${token}`,
//     return config;
// });
//http://172.30.1.44:8080
const client = axios.create({ baseURL: "http://49.50.173.236:8080" });

export default client;
