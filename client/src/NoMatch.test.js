import { render, screen } from '@testing-library/react';
import NoMatch from './NoMatch';

test('renders seen indexes text', () => {
  render(<NoMatch />);
  const notFoundElement = screen.getByText(/Page not found/i);
  expect(notFoundElement).toBeInTheDocument();
});
