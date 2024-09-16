import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Profile from '../Profile';
import rickMock from './rickMock';
import { GET_CHARACTER } from '../../schema/queries';

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <MockedProvider mocks={[rickMock]}>
      <MemoryRouter initialEntries={['/profile/1']}>
        <Routes>
          <Route path="/profile/:id" element={component} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );
};

test('should display the Back button', () => {
  renderWithProviders(<Profile />);

  expect(screen.getByText('<< Back')).toBeInTheDocument();
});

test('should display error message if there is an error', async () => {
  const errorMocks = [
    {
      request: {
        query: GET_CHARACTER,
        variables: { id: '1' },
      },
      error: new Error('An error occurred'),
    },
  ];

  render(
    <MockedProvider mocks={errorMocks} addTypename={false}>
      <MemoryRouter initialEntries={['/profile/1']}>
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );

  await screen.findByText('Error: An error occurred');
  expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
});

test('should display character details when loaded', async () => {
  renderWithProviders(<Profile />);

  await screen.findByText('Rick Sanchez');
  expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
  expect(screen.getByText('Alive')).toBeInTheDocument();
  expect(screen.getByText('Human')).toBeInTheDocument();
});

test('should display episodes when character details are loaded', async () => {
  renderWithProviders(<Profile />);

  await screen.findByText('S01E01 - Pilot');
  expect(screen.getByText('S01E01 - Pilot')).toBeInTheDocument();
});
