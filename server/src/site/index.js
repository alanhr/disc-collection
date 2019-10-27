import next from 'next'

export default app => {
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev })
  const nextHandler = nextApp.getRequestHandler()

  app.get('/edit-collection/:id', (req, res) => {
    return nextApp.render(req, res, '/edit-collection', { id: req.params.id })
  })

  app.all('*', nextHandler)

  return nextApp
}
