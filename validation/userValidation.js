const Joi = require('joi');

const userValidation = Joi.object({
    username: Joi.string()
        .min(5)
        .max(30)
        .alphanum()
        .required()
        .messages({
            'string.base': `"username" must be a text`,
            'string.empty': `"username" cannot be empty`,
            'string.min': `"username" should have at least 5 characters`,
            'string.max': `"username" should not exceed 30 characters`,
            'string.alphanum': `"username" must contain only letters and numbers`,
            'any.required': `"username" is required`
        }),

    email: Joi.string()
        .email({ tlds: { allow: false } }) // disables strict TLD checking
        .required()
        .messages({
            'string.base': `"email" must be a text`,
            'string.email': `"email" must be a valid email address`,
            'string.empty': `"email" cannot be empty`,
            'any.required': `"email" is required`
        }),

    password: Joi.string()
        .min(8)
        .max(128)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
        .required()
        .messages({
            'string.pattern.base': `"password" must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character (@$!%*?&)`,
            'string.min': `"password" should be at least 8 characters long`,
            'string.max': `"password" should not exceed 128 characters`,
            'string.empty': `"password" cannot be empty`,
            'any.required': `"password" is required`
        }),

    role: Joi.string()
        .valid('user', 'admin', 'moderator')
        .default('user')
        .messages({
            'any.only': `"role" must be one of [user, admin, moderator]`
        })
});

module.exports = userValidation;
