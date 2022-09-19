import axios from "axios";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(
      "http://localhost:4000/admins?username=" + req.body.username
    );
    console.log(data[0].password, req.body.password);
    if (data[0].password === req.body.password) {
      res.status(200).json({ status: 200, message: "SUCCESS" });
    } else {
      res
        .status(401)
        .json({ status: 401, message: "INVALID USERNAME OR PASSWORD" });
    }
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
}
