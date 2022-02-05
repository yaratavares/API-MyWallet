import userSignupSchema from "../schemas/userSignupSchema.js";

export default function userSignupValideMiddleware(req, res, next) {
  const validation = userSignupSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.path);
    return res.status(422).send(err);
  }

  next();
}
