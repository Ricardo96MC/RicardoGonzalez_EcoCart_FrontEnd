import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders siteName', () => {
  render(<App />);
  const siteName = screen.getByText(/EcoMusic/i);
  expect(siteName).toBeInTheDocument();
});
