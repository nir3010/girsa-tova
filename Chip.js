import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Chip({ label, selected, onPress, theme }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor: selected ? theme.primary : theme.card }
      ]}
    >
      <Text style={[styles.chipText, { color: selected ? '#fff' : theme.text }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500'
  }
});