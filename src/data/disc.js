import { task } from 'folktale/concurrency/task'
import { isEmpty, not } from 'ramda'
import axios from './axios'

export const getDiscs = (filter = '') =>
  task(async ({ resolve, reject }) => {
    try {
      let url = '/disc'

      if (not(isEmpty(filter))) {
        url = `${url}?q=${filter}`
      }
      const reponse = await axios.get(url)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const getDiscById = id =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.get(`/disc/${id}`)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const addDisc = disc =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.post(`/disc`, disc)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const updateDisc = (id, disc) =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.put(`/disc/${id}`, disc)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export const deleteDisc = id =>
  task(async ({ resolve, reject }) => {
    try {
      const reponse = await axios.delete(`/disc/${id}`)

      resolve(reponse)
    } catch (error) {
      reject(error)
    }
  })

export default {
  getDiscs,
  getDiscById,
  addDisc,
  updateDisc,
  deleteDisc,
}
