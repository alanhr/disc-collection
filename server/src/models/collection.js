import baseModelFactory from './baseModelFactory'

export default dbConnection => baseModelFactory(dbConnection, 'collection')
