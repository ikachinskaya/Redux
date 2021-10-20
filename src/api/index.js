import axios from "axios";

const httpClient = axios.create({ baseURL: "http://localhost:3000" });
const createUser = (data) => httpClient.post("/users", data);
