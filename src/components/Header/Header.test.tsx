import { fireEvent, render, screen } from '@testing-library/react';
import { describe } from '@jest/globals';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import Home from 'pages/home/Home';
import { Header } from './Header';

describe('<Header/>', () => {
  it('Should navigate', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('Botão para carrinho de compras'));
    expect(history.location.pathname).toBe('/cart');
  });
});
