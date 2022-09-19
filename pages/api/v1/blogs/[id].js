import axios from "axios";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/blogs?url=" + req.query.id
    );
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
