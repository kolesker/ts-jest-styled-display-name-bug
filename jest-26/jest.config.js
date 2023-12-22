module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
      babelConfig: ".babelrc"
    }
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  coverageThreshold: {
    global: {
      branches: 69,
      functions: 73,
      lines: 87,
      statements: 86,
    },
  },
  coverageReporters: ["json-summary", "text", "lcov", "clover", "cobertura"],
  /**
   * Specifies the maximum number of workers the worker-pool will spawn for running tests.
   * It defaults to 1, which is the most compatible setting.
   * In order to get a higher value (either in the terminal or in your shell initialization
   * script):
   * export JEST_MAX_WORKERS=4
   * (or whatever value is desired).
   */
  maxWorkers: process.env.JEST_MAX_WORKERS || 1,

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupTestEnv.ts'],

  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};

console.log('jest.config: Using ', module.exports.maxWorkers, 'worker/s');
