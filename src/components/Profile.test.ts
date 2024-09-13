import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from '../Profile';

describe('Profile', () => {
  it('renders character profile', async () => {
    render(
      <Router>
        <Profile />
      </Router>
    );
    const nameElement = await screen.findByText(/Rick Sanchez/i);
    expect(nameElement).toBeInTheDocument();
  });
});
