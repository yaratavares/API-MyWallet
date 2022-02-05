import joi from "joi";

const registerSchema = joi.object({
  money: joi.number().required(),
  description: joi.string().required(),
  type: joi.string().required(),
});

export default registerSchema;
