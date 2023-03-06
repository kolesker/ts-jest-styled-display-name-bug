/** @type {import('ts-jest').JestConfigWithTsJest} */
/**
 * The purpose of this is to have:
 * - consistent dates in snapshots (if they are used),
 * - validate that `src/utils/date-time-filter.spec.ts` works as expected, ideally
 *   in any timezone other than GMT/UTC.
 *
 * The requirements for this timezone is:
 * - Must not have DST, or it'll likely break UTs
 *   when DST is in effect (or the other way round).
 * - Should be a timezone where no dev member is located, so no team member
 *   can be tricked by running UTs on his/her local timezone.
 * - Can't be UTC+/- names, as NodeJS 15+ does not recognize them anymore.
 * - Should have -04:00 offset, or some tests will need some rewrite.
 *
 * The actual list of timezones can be fetched from:
 * - https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * - https://www.iana.org/time-zones
 */
process.env.TZ = 'America/Anguilla';

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
      tsConfig: "tsconfig.jest.json",
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

  // Support Absolute Paths
  moduleNameMapper: {
    '^~/billing/(.*)$': '<rootDir>/src/billing/$1',
    '^~/account-nav/(.*)$': '<rootDir>/src/account-nav/$1',
    '^~/activity-common/(.*)$': '<rootDir>/src/activity-common/$1',
    '^~/activity-dashboard/(.*)$': '<rootDir>/src/activity-dashboard/$1',
    '^~/activity-history/(.*)$': '<rootDir>/src/activity-history/$1',
    '^~/control-center/(.*)$': '<rootDir>/src/control-center/$1',
    '^~/common/(.*)$': '<rootDir>/src/common/$1',
    '^~/components/(.*)$': '<rootDir>/src/components/$1',
    '^~/containers/(.*)$': '<rootDir>/src/containers/$1',
    '^~/data-requests/(.*)$': '<rootDir>/src/data-requests/$1',
    '^~/error/(.*)$': '<rootDir>/src/error/$1',
    '^~/link/(.*)$': '<rootDir>/src/link/$1',
    '^~/middleware/(.*)$': '<rootDir>/server/middleware/$1',
    '^~/mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^~/reauth-challenge/(.*)$': '<rootDir>/src/reauth-challenge/$1',
    '^~/polyfills/(.*)$': '<rootDir>/src/polyfills/$1',
    '^~/services/(.*)$': '<rootDir>/src/services/$1',
    '^~/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^~/workflow/(.*)$': '<rootDir>/src/workflow/$1',
    '^~/order-history/(.*)$': '<rootDir>/src/order-history/$1',
    '\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
    '\.(css)$': '<rootDir>/__mocks__/cssMock.js',
    '\.(jpe?g|png|gif|ico|webp|woff2)$': '<rootDir>/__mocks__/imgMock.js',
  },

  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/webpack/',
    '<rootDir>/build-next-config.js',
    '<rootDir>/src/polyfills/',
    '<rootDir>/src/utils/testing/',
    '<rootDir>/src/billing/',
    '<rootDir>/src/services/hwid-service.ts',
  ],

  modulePathIgnorePatterns: [
    '<rootDir>/src/billing/',
  ]
};

console.log('jest.config: Using ', module.exports.maxWorkers, 'worker/s');
