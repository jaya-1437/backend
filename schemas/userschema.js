const Joi = require('joi');

// Schema for user registration
const registerSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Username is required',
      'string.min': 'Username should be at least 3 characters',
      'string.max': 'Username should not exceed 30 characters',
    }),
  
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid format',
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
    })
});

// Schema for user login
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid format',
    }),
  
  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Password is required',
    })
});

module.exports = {
  registerSchema,
  loginSchema
};
