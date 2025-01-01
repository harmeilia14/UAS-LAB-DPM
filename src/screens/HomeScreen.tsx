import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Book Tracking App!</Text>
      <Text style={styles.subtitle}>
        Manage your books and track your reading progress effortlessly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffebee', // Modern soft red background
  },
  title: {
    fontSize: 34, // Larger font size for emphasis
    fontWeight: 'bold', // Bold font for a striking appearance
    color: '#d32f2f', // Modern soft red for title text
    marginBottom: 25,
    textAlign: 'center',
    letterSpacing: 1.2, // Increased letter spacing for a sleek, modern look
  },
  subtitle: {
    fontSize: 18, // Slightly smaller for contrast
    textAlign: 'center',
    color: '#c62828', // Complementary modern red for subtitle
    marginTop: 15,
    lineHeight: 28, // Improved readability with increased line height
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
