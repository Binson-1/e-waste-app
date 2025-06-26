// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Alert } from 'react-native';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    console.log('Signing up:', name, email);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <AppButton title="Sign Up" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: colors.white },
    title: { fontSize: 28, fontWeight: 'bold', color: colors.black, marginBottom: 40, textAlign: 'center' },
    input: { backgroundColor: colors.lightGray, borderRadius: 10, padding: 15, fontSize: 16, marginBottom: 15 },
});

export default SignUpScreen;