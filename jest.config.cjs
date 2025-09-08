module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  roots: ['src/'],
  setupFilesAfterEnv: ['./jest.setup.after.js', 'jest-extended/all'],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};
