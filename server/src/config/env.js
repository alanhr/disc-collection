import joi from '@hapi/joi'

require('dotenv').config()

export default () => {
  const envVarsSchema = joi
    .object({
      NODE_ENV: joi
        .string()
        .allow('development', 'production', 'test', 'provision')
        .required(),
      PORT: joi.number().default(3000),
      LOGGER_LEVEL: joi
        .string()
        .allow('error', 'warn', 'info', 'verbose', 'debug', 'silly')
        .default('info'),
      LOGGER_ENABLED: joi
        .boolean()
        .truthy('TRUE')
        .truthy('true')
        .falsy('FALSE')
        .falsy('false')
        .default(true),
      DB_HOST: joi.string().required(),
      DB_USER: joi.string().required(),
      DB_PASSWORD: joi.string().required(),
      DB_NAME: joi.string().required(),
    })
    .unknown()
    .required()

  const { error, value: envVars } = envVarsSchema.validate(process.env)
  if (error) {
    throw new Error(`Config validation error: ${error.message}`)
  }

  process.env = { ...process.env, ...envVars }
}
