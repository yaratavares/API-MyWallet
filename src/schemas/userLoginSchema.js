import joi from "joi";

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi
    .string()
    .required()
    .pattern(/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$*&@#])[a-zA-Z0-9$*&@#]{8,}/),
});

export default userLoginSchema;
