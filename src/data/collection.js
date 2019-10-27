import { task } from 'folktale/concurrency/task'
import axios from './axios'

export const getCollections = () =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.get('/collection')

      resolve(reponse.data)
    } catch (error) {
      reject(error)
    }
  })

export const getCollectionById = id =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.get(`/collection/${id}`)

      resolve(reponse.data)
    } catch (error) {
      reject(error)
    }
  })

export default {
  getCollections,
  getCollectionById,
}
