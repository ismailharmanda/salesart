import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CommonButtonProps {
  onPress: () => void;
  title: string;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<CommonButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
}) => (
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
