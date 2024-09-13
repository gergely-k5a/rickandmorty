import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

test('renders search input', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const inputElement = screen.getByPlaceholderText(/search by name/i);
  expect(inputElement).toBeInTheDocument();
});

test('filters characters by name', async () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const inputElement = screen.getByPlaceholderText(/search by name/i);
  fireEvent.change(inputElement, { target: { value: 'Rick' } });
  const linkElement = await screen.findByText(/Rick Sanchez/i);
  expect(linkElement).toBeInTheDocument();
});
