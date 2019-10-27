module.exports = {
  roots: ['<rootDir>/src','<rootDir>/server/src'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/__mocks__', '<rootDir>/node_modules'],
  testRegex: '(/__tests__/.*|.(test|spec)).jsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).jsx?$'],
  verbose: false,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  coverageDirectory: '<rootDir>/coverage/',
  testEnvironment: 'node',
}
