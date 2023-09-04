import Joi from 'joi';

const validationSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua', 'uk'] },
    })
    .options({ presence: 'required' })
    .messages({
      'any.required': `missing required 'email' field`,
      'string.empty': `'email' cannot be an empty field`,
    }),
  tel: Joi.string().min(6).required().messages({
    'any.required': `missing required 'phone' field`,
    'string.empty': `'phone' cannot be an empty field`,
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  confirm_password: Joi.ref('password'),
});

export function validateData(data) {
  return validationSchema.validate(data);
}
