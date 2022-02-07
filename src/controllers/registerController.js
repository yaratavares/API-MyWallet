import { ObjectId } from "mongodb";
import db from "../db.js";

export async function postRegister(req, res) {
  const register = req.body;
  const { user } = res.locals;

  try {
    await db
      .collection("registers")
      .insertOne({ ...register, userId: user._id });

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

export async function getRegister(req, res) {
  const { user } = res.locals;

  try {
    const registers = await db
      .collection("registers")
      .find({ userId: user._id })
      .toArray();

    res.send(registers);
  } catch {
    res.sendStatus(500);
  }
}

export async function deleteRegister(req, res) {
  const { id } = req.params;
  const { user } = res.locals;

  console.log(user);
  if (id) {
    try {
      const register = await db
        .collection("registers")
        .findOne({ _id: new ObjectId(id), userId: user._id });

      if (register) {
        await db.collection("registers").deleteOne({ _id: new ObjectId(id) });
        res.send(200);
      } else {
        res.sendStatus(400);
      }
    } catch {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(404);
  }
}
