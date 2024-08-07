import {View, Button, StyleSheet} from 'react-native';
import {
  authenticateAsync,
  LocalAuthenticationResult,
} from 'expo-local-authentication';

interface AuthScreenProps {
  handleAuth: (result: LocalAuthenticationResult) => void;
  onFailedAuth: (error: unknown) => void;
}

const AuthScreen = ({handleAuth, onFailedAuth}: AuthScreenProps) => {
  const handleLoginPress = async () => {
    try {
      const result = await authenticateAsync();
      handleAuth(result);
    } catch (error) {
      onFailedAuth(error);
    }
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
