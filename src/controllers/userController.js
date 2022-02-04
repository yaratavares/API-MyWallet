import db from "../db.js";

export async function getUser(req, res) {
  const user = req.body;

  res.status(200).send(user);
}
