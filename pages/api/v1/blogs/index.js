import axios from "axios";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get("http://localhost:4000/blogList");
    // console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
