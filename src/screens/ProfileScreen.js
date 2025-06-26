// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // In a real app, you would clear user session/token here
    navigation.navigate('Welcome'); // Navigate back to the welcome screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>John Doe</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>john.doe@example.com</Text>
        <Text style={styles.label}>Member Since:</Text>
        <Text style={styles.value}>January 2023</Text>
      </View>
      <AppButton
        title="Logout"
        onPress={handleLogout}
        style={styles.logoutButton}
        textStyle={styles.logoutButtonText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 40,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray,
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: colors.black,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: colors.danger,
    width: '80%',
  },
  logoutButtonText: {
    color: colors.white,
  },
});

export default ProfileScreen;