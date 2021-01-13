const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  collectCoverageFrom: [
    '**/*.{,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.types.ts',
    '!**/index.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: ['cobertura', 'html'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      isolatedModules: true,
    },
  },
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: ['./'],
  setupFilesAfterEnv: ['<rootDir>/test-helpers/jest.setup.ts'],
  resetMocks: true,
}
