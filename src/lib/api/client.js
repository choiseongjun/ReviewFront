import axios from "axios";

//http://172.30.1.44:8080
const client = axios.create({ baseURL: "http://localhost:8080" });

export default client;
