import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
    // '\\.vue$': 'vue-jest'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
    // '^.+\\.vue$': 'vue-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: 'coverage'
}

export default config
