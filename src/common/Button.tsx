import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: object;
  textStyle?: object;
}

const Button = ({onPress, title, style, textStyle}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#007bff',
  },
});

export default Button;
