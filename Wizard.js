// Wizard.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Pressable,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from './components/ProgressBar';
import Chip from './components/Chip';
import { needs, values, decisions, stressCues, comfortCues } from './data';
import { light, dark } from './theme';

export default function Wizard({ navigation }) {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const [profile, setProfile] = useState({ need: '', value: '', decision: '', stress: [], comfort: [] });
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? dark : light;

  const next = () =>
    step < totalSteps
      ? setStep((s) => s + 1)
      : navigation.replace('Summary', { profile });
  const prev = () => step > 1 && setStep((s) => s - 1);
  const toggle = (key, v) =>
    setProfile((p) => ({
      ...p,
      [key]: p[key].includes(v)
        ? p[key].filter((x) => x !== v)
        : [...p[key], v]
    }));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Chip
            label="בחר צורך"
            selector={needs}
            selected={profile.need}
            onPress={(v) => setProfile((p) => ({ ...p, need: v }))}
          />
        );
      case 2:
        return (
          <Chip
            label="בחר ערך"
            selector={values}
            selected={profile.value}
            onPress={(v) => setProfile((p) => ({ ...p, value: v }))}
          />
        );
      case 3:
        return (
          <Chip
            label="בחר החלטה"
            selector={decisions}
            selected={profile.decision}
            onPress={(v) => setProfile((p) => ({ ...p, decision: v }))}
          />
        );
      case 4:
        return (
          <Chip
            label="שפת גוף במתח"
            selector={stressCues}
            multiple
            selected={profile.stress}
            onPress={(v) => toggle('stress', v)}
          />
        );
      case 5:
        return (
          <Chip
            label="שפת גוף בנוחות"
            selector={comfortCues}
            multiple
            selected={profile.comfort}
            onPress={(v) => toggle('comfort', v)}
          />
        );
      case 6:
        return (
          <View style={[styles.summaryContainer, { backgroundColor: theme.card }]}>            
            <Text style={[styles.summaryTitle, { color: theme.text }]}>סיכום הפרופיל</Text>
            <Text style={[styles.summaryText, { color: theme.text }]}>               
              צורך: {profile.need}{"\n"}
              ערך: {profile.value}{"\n"}
              החלטה: {profile.decision}{"\n"}
              מתח: {profile.stress.join(', ')}{"\n"}
              נוחות: {profile.comfort.join(', ')}
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <LinearGradient
      colors={[theme.primary, theme.secondary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>        
        <Text style={[styles.header, { color: theme.text }]}>שלב {step} מתוך {totalSteps}</Text>
        <ProgressBar step={step} total={totalSteps} theme={theme} />

        {renderStep()}

        <View style={styles.nav}>
          {step > 1 && (
            <Pressable
              onPress={prev}
              style={({ pressed }) => [styles.navButton, { backgroundColor: theme.danger }, pressed && styles.pressed]}
            >
              <Text style={styles.navText}>חזור</Text>
            </Pressable>
          )}
          <Pressable
            onPress={next}
            style={({ pressed }) => [styles.navButton, { backgroundColor: theme.primary }, pressed && styles.pressed]}
          >
            <Text style={styles.navText}>{step < totalSteps ? 'הבא' : 'סיום'}</Text>
          </Pressable>
        </View>

        {/* כפתור לתפריט ראשי קטן */}
        <Pressable
          onPress={() => navigation.replace('MainMenu')}
          style={({ pressed }) => [
            styles.homeButton,
            { backgroundColor: theme.secondary },
            pressed && styles.pressed
          ]}
        >
          <Text style={styles.homeText}>🏠</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  nav: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 },
  navButton: { flex: 1, marginHorizontal: 5, paddingVertical: 14, borderRadius: 8, alignItems: 'center', ...Platform.select({ android: { elevation: 3 }, ios: { shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 } }) },
  navText: { fontSize: 16, fontWeight: '600', color: '#fff' },
  homeButton: { alignSelf: 'center', padding: 10, borderRadius: 8, width: 50, alignItems: 'center', marginTop: 16, ...Platform.select({ android: { elevation: 2 }, ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 } }) },
  homeText: { fontSize: 20, color: '#fff' },
  pressed: { opacity: 0.7 },
  summaryContainer: { margin: 20, padding: 20, borderRadius: 16, ...Platform.select({ android: { elevation: 2 }, ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8 } }) },
  summaryTitle: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  summaryText: { fontSize: 16, lineHeight: 24 }
});