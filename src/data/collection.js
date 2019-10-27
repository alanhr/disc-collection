import { task } from 'folktale/concurrency/task'
import axios from './axios'

export const getCollections = () =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.get('/collection')

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const getCollectionById = id =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.get(`/collection/${id}`)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const addCollection = collection =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.post(`/collection`, collection)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const updateCollection = (id, collection) =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.put(`/collection/${id}`, collection)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export default {
  getCollections,
  getCollectionById,
  addCollection,
  updateCollection,
}
