import registerSchema from "../schemas/registrerSchema.js";

export default function registerValideMiddleware(req, res, next) {
  const validation = registerSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(err);
  }

  next();
}
