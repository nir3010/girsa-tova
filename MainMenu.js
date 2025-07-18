import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  Text,
  Pressable,
  StyleSheet,
  useColorScheme,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { light, dark } from './theme';

const LOGO_PATTERN   = require('./assets/logo-pattern.png');
const PROFILE_IMAGE  = require('./assets/profile.jpg');

export default function MainMenu({ navigation }) {
  const theme = useColorScheme() === 'dark' ? dark : light;

  const buttons = [
    { title: 'התחל ניתוח',        screen: 'Wizard',          color: theme.primary  },
    { title: 'סגנונות פרופילים',   screen: 'ProfileStyles',   color: theme.secondary },
    { title: 'מחוות מתח ושקר',     screen: 'DeceptionCues',   color: theme.secondary },
    { title: 'המנטור',            screen: 'Mentor',          color: theme.primary },
    { title: 'ניתוח לבוש',         screen: 'ClothingAnalysis',color: theme.secondary } // 🔥 חדש
  ];

  return (
    <View style={styles.container}>
      <Image source={LOGO_PATTERN} style={styles.backgroundImage} resizeMode="repeat" />
      <SafeAreaView style={[styles.overlay, { backgroundColor: theme.background + 'CC' }]}>
        <View style={styles.headerSection}>
          <LinearGradient
            colors={[theme.primary, theme.secondary]}
            style={styles.headerGradient}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.title, { color: '#000' }]}>ברוכים הבאים ל-Behavior Profiler</Text>
            <Text style={[styles.subtitle, { color: '#000' }]}>ניתוח מלא של פרופיל ועצות מיידיות</Text>
          </LinearGradient>
          <Image source={PROFILE_IMAGE} style={styles.profileImage} />
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((btn, idx) => (
            <Pressable
              key={idx}
              onPress={() => navigation.navigate(btn.screen)}
              style={({ pressed }) => [
                styles.menuButton,
                { backgroundColor: btn.color },
                pressed && styles.pressed
              ]}
            >
              <Text style={[styles.menuText, { color: '#000' }]}>{btn.title}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => navigation.replace('MainMenu')}
          style={({ pressed }) => [styles.backButton, { backgroundColor: theme.secondary }, pressed && styles.pressed]}
        >
          <Text style={[styles.backText, { color: '#000' }]}>🏠 בית</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const IMAGE_SIZE = Math.round(120 * 1.15);

const styles = StyleSheet.create({
  container:       { flex: 1 },
  backgroundImage: { ...StyleSheet.absoluteFillObject, width: undefined, height: undefined },
  overlay:         { flex: 1, alignItems: 'center', justifyContent: 'center' },
  headerSection:   { alignItems: 'center', marginBottom: 30 },
  headerGradient:  { padding: 20, borderRadius: 16, alignItems: 'center' },
  title:           { fontSize: 24, fontWeight: '700', textAlign: 'center' },
  subtitle:        { fontSize: 14, marginTop: 6, textAlign: 'center' },
  profileImage:    { width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: IMAGE_SIZE/2, borderWidth: 2, borderColor: '#D4AF37', marginTop: 16 },
  buttonsContainer:{ width: '80%', alignItems: 'center' },
  menuButton:      { width: '100%', paddingVertical: 14, marginVertical: 8, borderRadius: 8, alignItems: 'center', ...Platform.select({ android:{ elevation: 2 }, ios:{ shadowColor:'#000', shadowOpacity:0.2, shadowOffset:{width:0,height:2}, shadowRadius:4 } }) },
  menuText:        { fontSize: 16, fontWeight: '600' },
  backButton:      { marginTop: 20, padding: 10, borderRadius: 8 },
  backText:        { fontSize: 14, fontWeight: '600' },
  pressed:         { opacity: 0.7 }
});
