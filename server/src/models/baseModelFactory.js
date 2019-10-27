import R from 'ramda'
import Result from 'folktale/result'
import { task } from 'folktale/concurrency/task'

import isEmpty from '../utils/isEmpty'

const resultFn = (resolve, reject) => (error, results) => {
  if (R.not(isEmpty(error))) {
    return reject(Result.Error(error.message))
  }

  return resolve(Result.Ok(results))
}

const create = dbConnection => (table, fields) =>
  task(({ resolve, reject }) => {
    dbConnection.query('INSERT INTO ?? SET ?', [table, fields], resultFn(resolve, reject))
  })

const update = dbConnection => (table, fields, id) =>
  task(({ resolve, reject }) => {
    dbConnection.query('UPDATE ?? SET ? where id = ?', [table, fields, id], resultFn(resolve, reject))
  })

const deletedById = dbConnection => (table, id) =>
  task(({ resolve, reject }) => {
    dbConnection.query('DELETE FROM ?? WHERE id = ?', [table, id], resultFn(resolve, reject))
  })

const getById = dbConnection => (table, id, columns) =>
  task(({ resolve, reject }) => {
    let query = 'SELECT ?? FROM ?? WHERE id = ?'
    let queryParams = [columns, table, id]

    if (isEmpty(columns)) {
      query = 'SELECT * FROM ?? WHERE id = ?'
      queryParams = [table, id]
    }

    const queryOptions = {
      nestTables: true,
      values: queryParams,
      sql: query,
    }

    dbConnection.query(queryOptions, resultFn(resolve, reject))
  })

const getAll = dbConnection => (table, columns) =>
  task(({ resolve, reject }) => {
    let query = 'SELECT ?? FROM ??'
    let queryParams = [columns, table]

    if (isEmpty(columns)) {
      query = 'SELECT * FROM ??'
      queryParams = [table]
    }

    const queryOptions = {
      nestTables: true,
      values: queryParams,
      sql: query,
    }

    dbConnection.query(queryOptions, resultFn(resolve, reject))
  })

export default (dbConnection, table) => ({
  getById: R.partial(getById(dbConnection), [table]),
  getAll: R.partial(getAll(dbConnection), [table]),
  deletedById: R.partial(deletedById(dbConnection), [table]),
  update: R.partial(update(dbConnection), [table]),
  create: R.partial(create(dbConnection), [table]),
})
