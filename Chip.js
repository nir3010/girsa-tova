// components/Chip.js
import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  useColorScheme,
  Platform,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { light, dark } from '../theme';

export default function Chip({
  label,
  selector,
  multiple = false,
  selected,
  onPress,
}) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? dark : light;

  return (
    <View style={{ marginVertical: 12, paddingHorizontal: 20 }}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <View style={styles.row}>
        {selector.map((item) => {
          const isSel = multiple ? selected.includes(item) : selected === item;
          return (
            <BlurView
              key={item}
              intensity={30}
              tint={scheme}
              style={[
                styles.chip,
                { borderColor: theme.border },
                isSel && { backgroundColor: theme.primary },
              ]}
            >
              <Pressable
                onPress={() => onPress(item)}
                style={({ pressed }) => [
                  styles.touchable,
                  pressed && styles.pressed,
                ]}
                accessibilityRole="button"
                accessibilityState={{ selected: isSel }}
                accessibilityLabel={item}
              >
                <Text
                  style={[
                    styles.text,
                    isSel && styles.textSel,
                    { color: isSel ? '#fff' : theme.text },
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            </BlurView>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: {
    margin: 4,
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  touchable: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    minWidth: 44,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 14 },
  textSel: { fontWeight: '600' },
  pressed: { opacity: Platform.OS === 'android' ? 0.8 : 0.6 },
});
