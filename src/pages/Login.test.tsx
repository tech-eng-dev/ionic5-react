import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';

import MutationObserver from 'mutation-observer';
(global as any).MutationObserver = MutationObserver;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('page should define form elements', async () => {
  const store = mockStore({ auth: { user: undefined, token: '', loading: false } });
  store.dispatch = jest.fn();
  const { getByPlaceholderText, findByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  const button = await findByText('Continue');

  expect(usernameInput).toBeDefined();
  expect(passwordInput).toBeDefined();
  expect(button).toBeDefined();
});
