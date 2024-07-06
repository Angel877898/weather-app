import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../SearchInput';

test('renders SearchInput and handles search', () => {
  const handleSearch = jest.fn();
  render(<SearchInput onSearch={handleSearch} />);

  const input = screen.getByLabelText(/City/i);
  const button = screen.getByText(/Search/i);

  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.click(button);

  expect(handleSearch).toHaveBeenCalledWith('New York');
});
