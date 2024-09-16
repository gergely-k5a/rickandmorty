import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ApolloError } from '@apollo/client';
import ErrorMessage from '../common/ErrorMessage';

test('should render the error message when error is provided', () => {
  const error = new ApolloError({ errorMessage: 'An error occurred' });
  render(<ErrorMessage error={error} />);
  const errorMessageElement = screen.getByText(/Error: An error occurred/i);
  expect(errorMessageElement).toBeInTheDocument();
});

test('should not render anything when error is undefined', () => {
  const { container } = render(<ErrorMessage error={undefined} />);
  expect(container).toBeEmptyDOMElement();
});
