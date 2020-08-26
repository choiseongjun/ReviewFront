import axios from "axios";

//http://172.30.1.44:8080
const client = axios.create({ baseURL: "http://49.50.173.236:8080" });

export default client;
