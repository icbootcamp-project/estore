import axios from "axios";

async function youtube() {
  const res = await axios.get("/students");
  return res.data;
}

export default youtube;
