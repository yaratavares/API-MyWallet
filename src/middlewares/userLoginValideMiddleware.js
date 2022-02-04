import userLoginSchema from "../schemas/userLoginSchema.js";

export default function userLoginValideMiddleware(req, res, next) {
  const validation = userLoginSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.path);
    return res.status(422).send(err);
  }

  next();
}
