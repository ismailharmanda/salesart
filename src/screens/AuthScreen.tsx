import {View, Button, StyleSheet, Alert, Linking, Platform} from 'react-native';
import {
  authenticateAsync,
  LocalAuthenticationResult,
  getEnrolledLevelAsync,
  SecurityLevel,
} from 'expo-local-authentication';

interface AuthScreenProps {
  handleAuth: (result: LocalAuthenticationResult) => void;
  onFailedAuth: (error: unknown) => void;
}

const isAndroid = Platform.OS === 'android';
const AuthScreen = ({handleAuth, onFailedAuth}: AuthScreenProps) => {
  const handleLoginPress = async () => {
    try {
      const enrolledLevel = await getEnrolledLevelAsync();
      if (enrolledLevel === SecurityLevel.NONE) {
        Alert.alert(
          'No security set up',
          "You haven't set up any security on your device. Please set up a screen lock.",
          [
            {
              text: 'Navigate to settings to set up a screen lock',
              onPress: () =>
                isAndroid
                  ? Linking.sendIntent('android.settings.SECURITY_SETTINGS')
                  : Linking.openSettings(),
            },
            {text: 'Cancel'},
          ],
        );
        return;
      }

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
