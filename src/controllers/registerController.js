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
