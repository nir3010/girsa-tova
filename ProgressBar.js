// ProgressBar.js
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function ProgressBar({ step, total, theme }) {
  // מחשב את האחוז למילוי
  const width = `${(step / total) * 100}%`;

  return (
    <View
      style={[styles.barBackground, { backgroundColor: theme.border }]}
      accessible
      accessibilityLabel={`שלב ${step} מתוך ${total}`}
    >
      <Animated.View
        style={[styles.barFill, { width, backgroundColor: theme.primary }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  barBackground: {
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  barFill: {
    height: 4,
  },
});
