// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Add other screens like Profile, Rewards here */}
  </Stack.Navigator>
);

export default AppNavigator;