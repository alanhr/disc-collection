import joi from '@hapi/joi'
import { Router } from 'express'
import * as handler from './handler'
import requestValidator from '../../middleware/requestValidator'

const requestSchema = joi.object({
  name: joi
    .string()
    .max(50)
    .required(),
  description: joi.string().max(100),
})

const router = Router()

router
  .get('/:id', handler.getCollectionById)
  .get('/', handler.getCollections)
  .post('/', requestValidator(requestSchema), handler.addCollection)
  .delete('/:id', handler.deleteCollectionById)
  .put('/:id', requestValidator(requestSchema), handler.updateCollectionById)

export default router
