import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loader from '../common/Loader';

test('should render children when not loading', () => {
  render(
    <Loader loading={false}>
      <span>Content</span>
    </Loader>
  );
  expect(screen.getByText('Content')).toBeInTheDocument();
});

test('should not render children when loading', () => {
  render(
    <Loader loading={true}>
      <span>Content</span>
    </Loader>
  );
  expect(screen.queryByText('Content')).not.toBeInTheDocument();
});

test('should set aria-busy attribute based on loading prop', () => {
  const { rerender } = render(
    <Loader loading={true}>
      <span>Content</span>
    </Loader>
  );
  expect(screen.getByTestId('loader')).toHaveAttribute('aria-busy', 'true');

  rerender(
    <Loader loading={false}>
      <span>Content</span>
    </Loader>
  );
  expect(screen.getByTestId('loader')).toHaveAttribute('aria-busy', 'false');
});
