import * as Joi from '@hapi/joi';

export const createProductSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().required(),
  description: Joi.string(),
  image: Joi.string(),
});
