import {View, Button, StyleSheet} from 'react-native';

const AuthScreen = () => {
  const handleLoginPress = () => {
    console.log('Login Pressed');
  };
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthScreen;
