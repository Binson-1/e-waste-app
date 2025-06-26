// src/screens/RewardsScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../utils/colors';

const RewardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Rewards</Text>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Track your points and redeem rewards for recycling!
        </Text>
        <Text style={styles.pointsText}>Current Points: 150</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 20,
  },
  content: {
    padding: 20,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default RewardsScreen;