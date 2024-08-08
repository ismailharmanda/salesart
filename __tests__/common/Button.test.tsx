import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../../src/common';

describe('Button Component', () => {
  it('renders correctly with given title', () => {
    const {getByText} = render(<Button onPress={() => {}} title="Press Me" />);
    expect(getByText('Press Me')).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button onPress={onPressMock} title="Press Me" />,
    );
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies custom styles', () => {
    const customStyle = {backgroundColor: 'red'};
    const customTextStyle = {fontSize: 20};
    const {getByText, getByRole} = render(
      <Button
        onPress={() => {}}
        title="Press Me"
        style={customStyle}
        textStyle={customTextStyle}
      />,
    );

    const button = getByRole('button');
    const buttonText = getByText('Press Me');

    expect(button.props.style).toHaveProperty('backgroundColor', 'red');
    expect(buttonText.props.style).toContainEqual(customTextStyle);
  });
});
