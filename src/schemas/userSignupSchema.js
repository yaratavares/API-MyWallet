import joi from "joi";

const userSignupSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default userSignupSchema;