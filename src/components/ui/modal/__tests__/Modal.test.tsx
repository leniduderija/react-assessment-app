import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../Modal';

test('renders modal', () => {
  render(<Modal />);
  const element = screen.getByTestId('Modal');
  expect(element).toHaveClass('Modal');
});
