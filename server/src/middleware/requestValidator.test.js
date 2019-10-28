import joi from '@hapi/joi'

import requestValidator from './requestValidator'

describe('RequestValidator', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  const schema = joi.object({
    name: joi
      .string()
      .empty('')
      .max(50)
      .required(),
    description: joi.string().max(100),
  })
  const validatorMiddleware = requestValidator(schema)

  test('should validation the body payload and return error', () => {
    const nextMock = jest.fn()
    const resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    validatorMiddleware(
      {
        body: {
          name: '',
          description: 433,
        },
      },
      resMock,
      nextMock,
    )

    expect(resMock.status).toHaveBeenCalledWith(400)
    expect(resMock.json).toHaveBeenCalledWith({
      error: { description: '"description" must be a string', name: '"name" is required' },
    })
  })

  test('should validation the body payload and call next', () => {
    const nextMock = jest.fn()
    const resMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    validatorMiddleware(
      {
        body: {
          name: 'Teste',
          description: 'Teste Oodf',
        },
      },
      resMock,
      nextMock,
    )

    expect(resMock.json).not.toHaveBeenCalled()

    expect(nextMock).toHaveBeenCalled()
  })
})
