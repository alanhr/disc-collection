import collectionApi from './collection'

export default app => {
  app.use('/api', [collectionApi()])

  return app
}
