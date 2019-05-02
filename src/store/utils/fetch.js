import axios from "axios";

const fetch = axios.create({
  baseURL: "http://academic.vtc.ac.vn:2010/api/"
});

export default fetch;
