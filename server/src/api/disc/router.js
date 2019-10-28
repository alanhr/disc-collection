import joi from '@hapi/joi'
import { Router } from 'express'
import * as handler from './handler'
import requestValidator from '../../middleware/requestValidator'

const requestSchema = joi.object({
  name: joi
    .string()
    .max(50)
    .required(),
  singer: joi
    .string()
    .max(30)
    .required(),
  collectionId: joi.number().required(),
})

const router = Router()

router
  .get('/:id', handler.getDiscById)
  .get('/', handler.getDiscs)
  .post('/', requestValidator(requestSchema), handler.addDisc)
  .delete('/:id', handler.deleteDiscById)
  .put('/:id', requestValidator(requestSchema), handler.updateDiscById)

export default router
