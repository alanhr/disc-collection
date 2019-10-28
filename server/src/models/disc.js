import { task } from 'folktale/concurrency/task'
import mysql from 'mysql'
import R from 'ramda'
import baseModelFactory, { resultFn } from './baseModelFactory'
import isEmpty from '../utils/isEmpty'

const getAll = dbConnection => (filter = null) =>
  task(({ resolve, reject }) => {
    let query =
      'SELECT disc.*, collection.name as collection FROM disc INNER JOIN collection ON disc.collectionId = collection.id'

    if (R.not(isEmpty(filter))) {
      query = `${query} WHERE  disc.name LIKE ${mysql.escape(`%${filter}%`)}`
    }

    dbConnection.query(query, resultFn(resolve, reject))
  })

export default dbConnection => ({
  ...baseModelFactory(dbConnection, 'disc'),
  getAll: getAll(dbConnection),
})
