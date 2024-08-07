import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {AuthScreen, ListScreen} from './src/screens';
import {LocalAuthenticationResult} from 'expo-local-authentication';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = (result: LocalAuthenticationResult) => {
    setIsLoggedIn(result.success);
  };
  const handleFailedAuth = (error: unknown) => {
    console.error('Authentication error:', error);
  };
  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <ListScreen />
      ) : (
        <AuthScreen handleAuth={handleAuth} onFailedAuth={handleFailedAuth} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
