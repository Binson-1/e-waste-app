// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Used for tab icons

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen'; // Your Map screen
import ScanScreen from '../screens/ScanScreen'; // New screen
import RewardsScreen from '../screens/RewardsScreen'; // New screen
import ProfileScreen from '../screens/ProfileScreen'; // New screen
import colors from '../utils/colors'; // Import your color utility

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// This component defines the tab-based navigation for the main part of the app
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the header for screens within the tabs
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Scan') {
            iconName = focused ? 'qr-code' : 'qr-code-outline'; // Or 'camera', 'scan-circle'
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary, // Color for active tab icon/label
        tabBarInactiveTintColor: colors.gray, // Color for inactive tab icon/label
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.lightGray,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60, // Adjust height if needed
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Map" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// This is your main app navigator that includes the authentication flow and the main app tabs
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    {/* After login/signup, navigate to the 'App' screen which is your tab navigator */}
    <Stack.Screen name="App" component={HomeTabs} />
  </Stack.Navigator>
);

export default AppNavigator;