// src/screens/ScanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera'; // Import Camera component
import { Ionicons } from '@expo/vector-icons'; // For icons like 'camera-reverse'
import colors from '../utils/colors';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back); // Default to back camera

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanItem = () => {
    // This is where you'd add logic to take a photo, scan a barcode, etc.
    // For now, it's just a placeholder alert.
    Alert.alert('Scan Initiated', 'Imagine scanning an e-waste item now!');
  };

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Requesting for camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>No access to camera. Please enable it in settings.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Scan E-Waste</Text>

      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Ionicons name="camera-reverse" size={30} color={colors.white} />
              <Text style={styles.flipText}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>

      <TouchableOpacity style={styles.scanButton} onPress={handleScanItem}>
        <Ionicons name="qr-code-sharp" size={24} color={colors.white} style={styles.scanButtonIcon} />
        <Text style={styles.scanButtonText}>Scan Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 20,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.gray,
  },
  cameraContainer: {
    width: '90%',
    aspectRatio: 3 / 4, // Adjust aspect ratio as needed
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 30,
    backgroundColor: colors.lightGray, // Fallback background
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end', // Push flip button to bottom right
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  flipButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  flipText: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 5,
  },
  scanButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3, // For Android shadow
    shadowColor: colors.black, // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scanButtonIcon: {
    marginRight: 10,
  },
  scanButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScanScreen;