// src/screens/ScanScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../utils/colors';

const ScanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scan E-Waste</Text>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Camera functionality for scanning e-waste will go here.
        </Text>
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
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
  },
});

export default ScanScreen;