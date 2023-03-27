import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/home/Home';

it('renders welcome message', () => {
  render(<Home />);
  expect(screen.getByText('Rukshan Dias')).toBeInTheDocument();
});