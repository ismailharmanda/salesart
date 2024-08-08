import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TodoItem} from '../../src/components';

describe('TodoItem Component', () => {
  const defaultProps = {
    id: '1',
    text: 'Test Todo',
    completed: false,
    onToggle: jest.fn(),
    onEdit: jest.fn(),
    onDelete: jest.fn(),
  };

  it('renders correctly with given text', () => {
    const {getByText} = render(<TodoItem {...defaultProps} />);
    expect(getByText('Test Todo')).toBeTruthy();
  });

  it('renders with completed style when completed is true', () => {
    const {getByText} = render(<TodoItem {...defaultProps} completed={true} />);
    const todoText = getByText('Test Todo');
    expect(todoText.props.style).toContainEqual({
      textDecorationLine: 'line-through',
    });
  });

  it('calls onToggle with correct id when complete button is pressed', () => {
    const {getByText} = render(<TodoItem {...defaultProps} />);
    fireEvent.press(getByText('Complete'));
    expect(defaultProps.onToggle).toHaveBeenCalledWith('1');
  });

  it('calls onEdit with correct id and text when edit button is pressed', () => {
    const {getByText} = render(<TodoItem {...defaultProps} />);
    fireEvent.press(getByText('Edit'));
    expect(defaultProps.onEdit).toHaveBeenCalledWith('1', 'Test Todo');
  });

  it('calls onDelete with correct id when delete button is pressed', () => {
    const {getByText} = render(<TodoItem {...defaultProps} />);
    fireEvent.press(getByText('Delete'));
    expect(defaultProps.onDelete).toHaveBeenCalledWith('1');
  });

  it('applies delete button text style correctly', () => {
    const {getByText} = render(<TodoItem {...defaultProps} />);
    const deleteButton = getByText('Delete');
    expect(deleteButton.props.style).toContainEqual({color: '#ff0000'});
  });
});
