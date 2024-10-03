export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/tests/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/tests/mocks/styleMock.js',
  },
};
