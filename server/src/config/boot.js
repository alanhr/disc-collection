export default app => {
  if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('port'), () => {
      console.log(`NodeJS REST API - Port ${app.get('port')}`)
    })
  }
  process.on('SIGINT', () => {
    console.log('SIGINT - Exiting...')

    process.exit(1)
  })
}
