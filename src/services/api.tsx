import axios from "axios";

export default await axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json"
  }
});
