import dbConnection from './dbConnection'
import collectionModel from './collection'
import discModel from './disc'

export const collection = collectionModel(dbConnection)
export const disc = discModel(dbConnection)

export default {
  collection,
  disc,
}
