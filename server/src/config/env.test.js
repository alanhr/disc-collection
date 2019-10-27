import checkEnv from './env'

describe('Check Env Config', () => {
  beforeEach(() => {
    delete process.env.NODE_ENV
  })

  describe('Without Env', () => {
    test('should behave throw execption when forget pass envs', () => {
      expect(() => {
        checkEnv()
      }).toThrow(/NODE_ENV/)
    })
  })
  describe('Set Env', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'test'
      checkEnv()
    })

    test('should behave STAGE inside of process.env', () => {
      expect(process.env).toHaveProperty('NODE_ENV', 'test')
    })
  })
})
