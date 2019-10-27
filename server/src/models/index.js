import dbConnection from './dbConnection'
import collectionModel from './collection'

export const collection = collectionModel(dbConnection)

export default {
  collection,
}
