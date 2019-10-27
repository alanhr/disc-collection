import isEmpty from './isEmpty'

describe('Utils/isEmpty', () => {
  test('should return false when value is not empty', () => {
    expect(isEmpty('Teste')).toBeFalsy()
  })

  test('should return true when value is null', () => {
    expect(isEmpty(null)).toBeTruthy()
  })

  test('should return true when value is undefined', () => {
    expect(isEmpty(undefined)).toBeTruthy()
  })
})
