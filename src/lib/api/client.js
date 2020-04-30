import axios from "axios";

const client = axios.create({ baseURL: "http://172.30.1.44:8080" });

export default client;
