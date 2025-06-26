// src/components/AppButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const AppButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppButton;