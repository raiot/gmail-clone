import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { StoreContext } from '../../store';

test('renders <Header /> with no selected emails', () => {
  const { getByText } = render(
      <StoreContext.Provider value={{state: {selected: []}}}>
          <Header />
      </StoreContext.Provider>);
  const hamburgerMenu = getByText('0 email(s) selected');
  expect(hamburgerMenu).toBeInTheDocument();
});

test('renders <Header /> with 2 selected emails', () => {
    const { getByText } = render(
        <StoreContext.Provider value={{state: {selected: [{}, {}]}}}>
            <Header />
        </StoreContext.Provider>);
    const hamburgerMenu = getByText('2 email(s) selected');
    expect(hamburgerMenu).toBeInTheDocument();
  });