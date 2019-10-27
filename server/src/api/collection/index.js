import { Router } from 'express'

import router from './router'

export default () => {
  const routerConfig = Router()

  routerConfig.use('/collection', router)

  return routerConfig
}
