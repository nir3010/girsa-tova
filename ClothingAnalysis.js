// ClothingAnalysis.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { light, dark } from './theme';

const clothingProfiles = [
  {
    style: 'בגדי מותגים יוקרתיים',
    need: 'אישורים',
    value: 'הערכה',
    decision: 'המשקיע',
    interpretation: 'הלובש מבקש הכרה חיצונית ומנסה לשדר הצלחה חומרית. הוא רואה בבחירות שלו השקעה תדמיתית שתניב כבוד או תועלת.',
  },
  {
    style: 'לבוש ספורטיבי יומיומי',
    need: 'קבוצתיות',
    value: 'ניסיון',
    decision: 'כמו כולם',
    interpretation: 'סגנון המעיד על צורך להשתייך ולהיטמע, תוך הישענות על מה שמוכר ונוח מהעבר. האדם נמנע מבליטה יתרה כדי לשמור על קבלה חברתית.',
  },
  {
    style: 'לבוש ייחודי/אקלקטי (כובעים, תכשיטים חריגים)',
    need: 'חשיבות עצמית',
    value: 'יוצא דופן',
    decision: 'יוצא דופן',
    interpretation: 'האדם מבקש לבלוט, לשדר ייחודיות ולעורר עניין. הלבוש הופך לכלי ליצירת נוכחות ולחיפוש שליטה דרך תשומת לב.',
  },
  {
    style: 'לבוש מוקפד אך שמרני',
    need: 'אינטליגנציה',
    value: 'מידע',
    decision: 'מיישר קו',
    interpretation: 'מעיד על רצון להיתפס כמשכיל, מסודר ורציני. הלובש מנסה להיצמד לקודים חברתיים ברורים ולהימנע מהתבלטות פזיזה.',
  },
  {
    style: 'לבוש מרושל או לא מוקפד',
    need: 'חופש',
    value: 'חופש',
    decision: 'הנצרך',
    interpretation: 'הלובש מסמן חוסר עניין במוסכמות. הוא פועל מתוך התנגדות למבנים וחוקים, ובוחר לפי נוחות רגעית בלבד.',
  },
  {
    style: 'לבוש נועז וחושפני',
    need: 'כוח ושליטה',
    value: 'שבטיות',
    decision: 'הטכנולוגי',
    interpretation: 'מעיד על שימוש בלבוש ככלי לשליטה או השפעה מינית/חברתית. הלובש מבקש להכתיב את הדינמיקה ולהוביל את הסביבה לפי קוד מודרני וחדשני.',
  },
];

export default function ClothingAnalysis() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? dark : light;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>👕 ניתוח סגנונות לבוש</Text>
      {clothingProfiles.map((item, idx) => (
        <View key={idx} style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.title, { color: theme.text }]}>{item.style}</Text>
          <Text style={[styles.label, { color: theme.text }]}>{`• צורך: ${item.need}`}</Text>
          <Text style={[styles.label, { color: theme.text }]}>{`• ערך: ${item.value}`}</Text>
          <Text style={[styles.label, { color: theme.text }]}>{`• קבלת החלטות: ${item.decision}`}</Text>
          <Text style={[styles.interpretation, { color: theme.text }]}>🔍 {item.interpretation}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  card: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  label: { fontSize: 14, marginBottom: 2 },
  interpretation: { marginTop: 8, fontSize: 14, fontStyle: 'italic', lineHeight: 20 },
});
