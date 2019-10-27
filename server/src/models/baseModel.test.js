import mysql from 'mysql'
import baseModelFactory from './baseModelFactory'
import dbConnection from './dbConnection'

jest.mock('mysql', () => {
  return {
    createConnection: jest.fn().mockImplementation(() => ({
      connect: jest.fn(),
      query: jest.fn(),
    })),
  }
})

describe('BaseModel', () => {
  let baseModel
  beforeEach(() => {
    baseModel = baseModelFactory(dbConnection, 'teste')
  })

  afterEach(() => {
    mysql.createConnection.mockClear()
    dbConnection.query.mockClear()
  })

  describe('Create', () => {
    test('should insert a row', done => {
      const expectedResult = { insertId: 10 }

      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(null, expectedResult)
      })

      baseModel
        .create({ name: 'test' })
        .run()
        .future()
        .map(result => {
          expect(result.merge()).toEqual(expectedResult)
          return done()
        })
    })

    test('should not insert a row when throw error', done => {
      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(new Error('insert error'))
      })

      baseModel
        .create({ name: 'test' })
        .run()
        .future()
        .mapRejected(result => {
          expect(() => {
            result.unsafeGet()
          }).toThrow()
          return done()
        })
    })
  })

  describe('Update', () => {
    test('should update a row', done => {
      const expectedResult = { changedRows: 1 }

      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(null, { changedRows: 1 })
      })

      baseModel
        .update({ name: 'test' }, 10)
        .run()
        .future()
        .map(result => {
          expect(result.merge()).toEqual(expectedResult)
          return done()
        })
    })

    test('should not update a row when throw error', done => {
      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(new Error('update error'))
      })

      baseModel
        .update({ name: 'test' }, 10)
        .run()
        .future()
        .mapRejected(result => {
          expect(() => {
            result.unsafeGet()
          }).toThrow()
          return done()
        })
    })
  })

  describe('DeletedById', () => {
    test('should delete a row', done => {
      const expectedResult = { affectedRows: 1 }

      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(null, { affectedRows: 1 })
      })

      baseModel
        .deletedById(10)
        .run()
        .future()
        .map(result => {
          expect(result.merge()).toEqual(expectedResult)
          return done()
        })
    })

    test('should not delete a row when throw error', done => {
      dbConnection.query.mockImplementation((query, params, callback) => {
        callback(new Error('Deleted error'))
      })

      baseModel
        .update({ name: 'test' }, 10)
        .run()
        .future()
        .mapRejected(result => {
          expect(() => {
            result.unsafeGet()
          }).toThrow()
          return done()
        })
    })
  })

  describe('getById', () => {
    test('should get a row', done => {
      const expectedResult = [{ name: 'teste' }]

      dbConnection.query.mockImplementation((params, callback) => {
        callback(null, [{ name: 'teste' }])
      })

      baseModel
        .getById(10)
        .run()
        .future()
        .map(result => {
          expect(result.merge()).toEqual(expectedResult)
          return done()
        })
    })

    test('should not return rows whern throw error', done => {
      dbConnection.query.mockImplementation((params, callback) => {
        callback(new Error('Select error'))
      })

      baseModel
        .getById(10)
        .run()
        .future()
        .mapRejected(result => {
          expect(() => {
            result.unsafeGet()
          }).toThrow()
          return done()
        })
    })

    test('should return params with columns', async () => {
      dbConnection.query.mockImplementation((params, callback) => {
        callback(null, [])
      })

      await baseModel
        .getById(10, ['name'])
        .run()
        .promise()

      expect(dbConnection.query).toHaveBeenCalledWith(
        {
          nestTables: true,
          sql: 'SELECT ?? FROM ?? WHERE id = ?',
          values: [['name'], 'teste', 10],
        },
        expect.any(Function),
      )
    })
  })
})
