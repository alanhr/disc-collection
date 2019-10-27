/* eslint-disable global-require */
import mysql from 'mysql'

jest.mock('mysql')

describe('DbConnection', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('should throw error when connection is fail ', () => {
    mysql.createConnection.mockImplementation(() => ({
      connect: jest.fn().mockImplementation(callback => {
        callback(new Error('Teste'))
      }),
    }))

    expect(() => {
      require('./dbConnection')
    }).toThrow()
  })

  test('should not throw error when connection is success ', () => {
    mysql.createConnection.mockImplementation(() => ({
      connect: jest.fn().mockImplementation(callback => {
        callback(null)
      }),
    }))

    expect(() => {
      require('./dbConnection')
    }).not.toThrow()
  })
})
