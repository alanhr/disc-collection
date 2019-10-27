import { createConnection } from 'mysql'
import R from 'ramda'

import env from '../config/env'
import isEmpty from '../utils/isEmpty'

env()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const dbConnection = createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

const checkConnection = err => {
  if (R.not(isEmpty(err))) {
    const errorMessage = 'Connection db error'

    console.log(`${errorMessage} ${err.message}`)

    throw new Error(errorMessage)
  }

  console.log('DB connection success!!')
}

dbConnection.connect(checkConnection)

export default dbConnection
