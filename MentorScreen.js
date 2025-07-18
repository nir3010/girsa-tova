// MentorScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  useColorScheme,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { light, dark } from './theme';

export default function MentorScreen({ navigation }) {
  const theme = useColorScheme() === 'dark' ? dark : light;
  const [media, setMedia] = useState(null);
  const [analysis, setAnalysis] = useState('');

  // בוחר תמונה/וידאו מהגלריה
  const pickMedia = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7
    });
    if (!result.canceled && result.assets?.length > 0) {
      setMedia(result.assets[0].uri);
      setAnalysis(''); // איפוס ניתוח קודם
    }
  };

  // מבצע ניתוח על המדיה שנבחרה
  const analyzeMedia = () => {
    if (!media) return;
    // כאן ניתן לשלב קריאה ל-API שיחזיר ניתוח אמיתי
    setAnalysis(
      '✅ ניתוח הושלם: \
• זיהוי מחוות: קשר עין נמנע, חיוך מלאכותי\n• סבירות שקר: בינונית\n• המלצה: שים לב למחוות נוספות כמו גירוד באוזן ושינוי טון.'
    );
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>      
      <Text style={[styles.header, { color: theme.primary }]}>המנטור – ניתוח בזמן אמת</Text>

      <Pressable style={[styles.button, { backgroundColor: theme.secondary }]} onPress={pickMedia}>
        <Text style={[styles.buttonText, { color: '#000' }]}>בחר/י תמונה או וידאו</Text>
      </Pressable>

      {media && <Image source={{ uri: media }} style={styles.preview} resizeMode="cover" />}

      {media && (
        <Pressable style={[styles.button, { backgroundColor: theme.primary }]} onPress={analyzeMedia}>
          <Text style={[styles.buttonText, { color: '#000' }]}>נתח/י עכשיו</Text>
        </Pressable>
      )}

      {analysis !== '' && (
        <View style={[styles.resultBox, { backgroundColor: theme.card }]}>          
          <Text style={[styles.resultText, { color: theme.text }]}>{analysis}</Text>
        </View>
      )}

      <Pressable style={[styles.backButton, { backgroundColor: theme.secondary }]} onPress={() => navigation.replace('MainMenu')}>
        <Text style={[styles.backText, { color: '#000' }]}>🏠 לתפריט ראשי</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:     { flex: 1, padding: 20 },
  header:        { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  button:        { padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 10, ...Platform.select({ android: { elevation: 2 }, ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 } }) },
  buttonText:    { fontSize: 16, fontWeight: '600' },
  preview:       { width: '100%', height: 300, borderRadius: 12, marginVertical: 12 },
  resultBox:     { padding: 16, borderRadius: 8, marginVertical: 16, ...Platform.select({ android: { elevation: 2 }, ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 } }) },
  resultText:    { fontSize: 14, lineHeight: 20 },
  backButton:    { alignSelf: 'center', padding: 10, borderRadius: 8, marginTop: 20 },
  backText:      { fontSize: 14, fontWeight: '600' }
});
