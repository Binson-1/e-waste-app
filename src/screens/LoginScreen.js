// src/screens/LoginScreen.js
// Use the code from the previous response. It's already complete!
// If you need it again, just let me know.
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    console.log('Logging in with:', email);
    navigation.navigate('App'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <AppButton title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: colors.white },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.black, marginBottom: 40, textAlign: 'center' },
  input: { backgroundColor: colors.lightGray, borderRadius: 10, padding: 15, fontSize: 16, marginBottom: 15 },
  linkText: { color: colors.primary, textAlign: 'center', marginTop: 15 },
});

export default LoginScreen;