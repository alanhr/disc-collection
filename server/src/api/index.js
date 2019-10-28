import collectionApi from './collection'
import discApi from './disc'

export default app => {
  app.use('/api', [collectionApi()])
  app.use('/api', [discApi()])

  return app
}
