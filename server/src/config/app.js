import express from 'express'

export default () => {
  const app = express()

  app.set('port', process.env.PORT)

  return app
}
