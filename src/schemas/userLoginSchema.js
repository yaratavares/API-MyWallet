import joi from "joi";

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default userLoginSchema;

// .pattern(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$*&@#])[a-zA-Z0-9$*&@#]{8,}/),
