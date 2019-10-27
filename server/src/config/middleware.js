import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

export default app => {
  app
    .use(cors())
    .use(helmet())
    .use(bodyParser.json())

  return app
}
