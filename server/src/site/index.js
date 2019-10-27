import next from 'next'

export default app => {
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = next({ dev })
  const nextHandler = nextApp.getRequestHandler()

  app.get('/collection/edit/:id', (req, res) => {
    return nextApp.render(req, res, '/collection/edit', { id: req.params.id })
  })

  app.all('*', nextHandler)

  return nextApp
}
