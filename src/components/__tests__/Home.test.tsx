import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { MockedProvider } from '@apollo/client/testing';
import { GET_CHARACTERS } from '../../schema/queries';
import Home from '../Home';
import { StateProvider } from '../common/StateContext';
import { MemoryRouter } from 'react-router-dom';
import charactersMock from './charactersMock';

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <MockedProvider mocks={[charactersMock]} addTypename={false}>
      <StateProvider>
        <MemoryRouter>{component}</MemoryRouter>
      </StateProvider>
    </MockedProvider>
  );
};

test('should display the page title and search field', () => {
  renderWithProviders(<Home />);

  expect(screen.getByText('Rick and Morty Characters')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
});

test('should display the loading indicator when data is loading', () => {
  renderWithProviders(<Home />);

  expect(screen.getByTestId('loader')).toHaveAttribute('aria-busy', 'true');
});

test('should display data when it is loaded successfully', async () => {
  renderWithProviders(<Home />);

  await screen.findByText('Rick Sanchez');
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(21);
});

test('should display an error message if there was an error during data retrieval', async () => {
  const errorMocks = [
    {
      request: {
        query: GET_CHARACTERS,
        variables: { page: 1, name: '' },
      },
      error: new Error('An error occurred'),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <StateProvider>
        <Home />
      </StateProvider>
    </MockedProvider>
  );

  await screen.findByText('Error: An error occurred');
  expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
});

test('should display pagination with the correct number of pages', async () => {
  renderWithProviders(<Home />);

  await screen.findByText('Rick Sanchez');
  expect(screen.getByText('Page 1 of 42')).toBeInTheDocument();
});
