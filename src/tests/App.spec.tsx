import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../app/store';

jest.mock('../config/config', () => ({
  config: {
    apiUrl: 'http://localhost:mock',
  },
}));

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  expect(true).toBeTruthy();
});
