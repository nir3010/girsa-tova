// ProfileStyles.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';
import { light, dark } from './theme';

// דוגמאות סגנונות פרופילים עם הסברים מלאים
const profiles = [
  {
    title: 'המוביל',
    need: 'כוח ושליטה',
    value: 'הערכה',
    decision: 'יוצא דופן',
    description: 'המוביל שואף להשפיע ולקבל שליטה בסביבה. מחפש הערכה גלויה כדי לחזק את מעמדו.',
    strengths: [
      'מנהיגות ובטחון עצמי',
      'חדשנות ופריצת גבולות',
      'יכולת לקבל החלטות תקיפות'
    ],
    weaknesses: [
      'רגישות לביקורת',
      'פעמים נראה יהיר או מרוחק',
      'תלות באישורים חיצוניים'
    ]
  },
  {
    title: 'המזדהה',
    need: 'קבוצתיות',
    value: 'שבטיות',
    decision: 'כמו כולם',
    description: 'המזדהה שואף להשתייך ולשמור על אחדות בקבוצה. מקבל הנחיות בהתאם לנורמות החברתיות.',
    strengths: [
      'קואופרטיביות ואמפתיה',
      'יכולת לבנות קשרים חזקים',
      'יציבות ומניעת קונפליקטים'
    ],
    weaknesses: [
      'חוסר מובחנות עצמי',
      'קושי בקבלת שינויים',
      'תלות בהחלטות הקבוצה'
    ]
  },
  {
    title: 'המחשב',
    need: 'אינטליגנציה',
    value: 'מידע',
    decision: 'הטכנולוגי',
    description: 'המחשב מבסס בכל החלטה על נתונים ומידע עדכני. תמיד בחזית החדשנות הטכנולוגית.',
    strengths: [
      'דיוק ואנליזה מעמיקה',
      'למידה מתמדת והתעדכנות',
      'פתרון בעיות בעזרת כלים טכנולוגיים'
    ],
    weaknesses: [
      'החלטות איטיות מדי',
      'קושי בזיהוי אינטואיציה אנושית',
      'תלות בכלים זמינים'
    ]
  },
  {
    title: 'המגן',
    need: 'אישורים',
    value: 'ניסיון',
    decision: 'מיישר קו',
    description: 'המגן זקוק לאישורים חיצוניים וביסוס על ניסיון כדי לפעול. מעדיף לפעול לפי הנורמות כדי להימנע מסיכונים.',
    strengths: [
      'אמינות ומחויבות לניסיון עבר',
      'שיתוף לקחים והעברת ידע',
      'קונפורמיות מקצועית שמייצרת ביטחון'
    ],
    weaknesses: [
      'חשש מסטייה ממה שכבר עבד',
      'פחד מקבלת החלטות ללא תמיכה',
      'רגישות לביקורת על ניסיון העבר'
    ]
  },
  {
    title: 'המחלץ',
    need: 'קורבניזם',
    value: 'חופש',
    decision: 'הנצרך',
    description: 'המחלץ מציג עצמו כקורבן נסיבות כדי למשוך תמיכה ומתנהל לפי דחיפות משברית כדי לפעול.',
    strengths: [
      'אמפתיה וגיוס תמיכה סביבתית',
      'יכולת לפעול במהירות תחת לחץ',
      'מודעות גבוהה למצבי חירום'
    ],
    weaknesses: [
      'נטייה לשמר מצוקה',
      'החלטות נדחות עד למשבר',
      'תלות בסביבה ובאחרים'
    ]
  }
];

export default function ProfileStyles() {
  const theme = useColorScheme() === 'dark' ? dark : light;
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>      
      <Text style={[styles.header, { color: theme.primary }]}>סגנונות פרופילים נפוצים</Text>
      {profiles.map((p, i) => (
        <View key={i} style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>          
          <Text style={[styles.title, { color: theme.primary }]}>{p.title}</Text>
          <Text style={[styles.description, { color: theme.text }]}>{p.description}</Text>
          <Text style={[styles.subheading, { color: theme.text }]}>נקודות חוזקה:</Text>
          {p.strengths.map((s, idx) => (
            <Text key={idx} style={[styles.item, { color: theme.text }]}>{`•  ${s}`}</Text>
          ))}
          <Text style={[styles.subheading, { color: theme.text, marginTop:12 }]}>נקודות חולשה:</Text>
          {p.weaknesses.map((w, idx) => (
            <Text key={idx} style={[styles.item, { color: theme.text }]}>{`•  ${w}`}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 16, textAlign: 'center' },
  card: { padding: 16, borderRadius: 12, marginBottom: 16, borderWidth: 1 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  description: { fontSize: 14, lineHeight: 20, marginBottom: 12 },
  subheading: { fontSize: 16, fontWeight: '500', marginBottom: 6 },
  item: { fontSize: 14, lineHeight: 20, marginLeft: 8 }
});
