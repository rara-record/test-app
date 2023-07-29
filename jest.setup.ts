// See https://github.com/vercel/next.js/tree/canary/examples/with-jest

// Used for __tests__
// Learn more: https://github.com/testing-library/jest-dom
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'

// Polyfill "window.fetch" used in the React component.
// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch'

// Extend Jest "expect" functionality with Testing Library assertions.
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'
