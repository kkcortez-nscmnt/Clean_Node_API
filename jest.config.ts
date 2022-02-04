export default {
  root: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  coverageProvider: 'v8',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
