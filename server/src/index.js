import { compose } from 'ramda'

import env from './config/env'
import createApp from './config/app'
import bootApp from './config/boot'
import middleware from './config/middleware'
import api from './api'
import site from './site'

env()

const expressApp = compose(
  api,
  middleware,
  createApp,
)()

const siteApp = site(expressApp)

if (process.env.NODE_ENV !== 'test') {
  siteApp.prepare().then(() => {
    bootApp(expressApp)
  })
}

export default expressApp
