import { Router } from 'express'

import router from './router'

export default () => {
  const routerConfig = Router()

  routerConfig.use('/disc', router)

  return routerConfig
}
