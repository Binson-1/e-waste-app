// src/screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../utils/colors';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* You would add your logo or a relevant image here */}
      {/* <Image style={styles.logo} source={require('../../assets/logo.png')} /> */}
      <Text style={styles.title}>E-Waste Recycler</Text>
      <Text style={styles.subtitle}>Turn your trash into treasure. Responsibly.</Text>
      
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton 
          title="Sign Up" 
          onPress={() => navigation.navigate('SignUp')} 
          style={{ backgroundColor: colors.secondary }} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    position: 'absolute',
    top: 280,
  },
  subtitle: {
    fontSize: 18,
    color: colors.gray,
    position: 'absolute',
    top: 330,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 30,
  },
});

export default WelcomeScreen;