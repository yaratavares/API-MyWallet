import db from "../db.js";
import jwt from "jsonwebtoken";

export default async function tokenValidationMiddleware(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
  const keySecret = process.env.JWT_SECRET;

  try {
    const dados = jwt.verify(token, keySecret);
    console.log(dados);
  } catch {
    return res.sendStatus(401);
  }

  const session = await db.collection("sessions").findOne({ token });
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  res.locals.user = user;
  res.locals.session = session;

  next();
}
