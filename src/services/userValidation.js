const Joi = require("joi");

const userValidation = (body) => {
  const userSchema = Joi.object({
    username: Joi.string().required().min(3),
    password: Joi.string().required().min(3),
  });

  return userSchema.validate(body);
};

module.exports.userValidation = userValidation;
