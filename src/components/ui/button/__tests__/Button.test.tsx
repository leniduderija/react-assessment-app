import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Button component', () => {
  test('renders correctly', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  test('applies className correctly', () => {
    render(<Button className="custom-class">Click me</Button>);
    const buttonElement = screen.getByTestId('Button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('fires onClick event', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByTestId('Button');
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalled();
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Button>Click me</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
