// DeceptionCues.js
import React from 'react';
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';
import { light, dark } from './theme';

// רשימת מחוות מתח והשערות לשקר עם תיאורים מתוקנים
const cues = [
  {
    category: 'הבעות פנים',
    items: [
      { name: 'חיוך צבוע', desc: 'חיוך נסוג בפינות הפה שלא מגיע לעיניים, מצביע על עצבנות.' },
      { name: 'הרמת גבות מהירה', desc: 'הרמת גבות פתאומית במהלך הדיבור, מציינת ספק.' },
      { name: 'הצמצום של האישונים', desc: 'השתנות מהירה בגודל האישונים בזמן התשובה, סימן למתח.' }
    ]
  },
  {
    category: 'תנועות גוף עליונות',
    items: [
      { name: 'נגיעות תכופות באף', desc: 'נגיעה באף כמהות של חוסר נוחות או ניסיון להסיט תשומת לב.' },
      { name: 'גירוד באוזן', desc: 'מחווה של התמודדדות עם מתח ופחות ביטחון.' },
      { name: 'הצלבת זרועות', desc: 'הצמדת הזרועות לגוף כמחסום מגן.' }
    ]
  },
  {
    category: 'תנועות גוף תחתונות',
    items: [
      { name: 'נדנדת רגליים', desc: 'תנועה בלתי רצונית של הרגליים שמצביעה על עצבנות.' },
      { name: 'נסיגה בכיסא', desc: 'הזזה לאחור במושב, רמז לרצון להתרחק מהאינטראקציה.' },
      { name: 'הצטמצמות במרחב', desc: 'התכנסות פנימית ושאיפה להקטין נוכחות.' }
    ]
  },
  {
    category: 'קול ושפה',
    items: [
      { name: 'היסוס בדיבור', desc: 'שימוש במילים כמו "אממ" ו"אהה" שמצביע על חוסר ודאות.' },
      { name: 'שינוי פתאומי בטון הדיבור', desc: 'עליית או ירידת טון חדה מלווה במתח.' },
      { name: 'קצב דיבור מואץ', desc: 'דיבור מהיר במטרה לסיים במהירות ולהימנע מעמידה על כנות.' }
    ]
  },
  {
    category: 'שילובים מסוכנים',
    items: [
      { name: 'נגיעה באף + הימנעות מקשר עין', desc: 'שילוב המעיד על חרדה וניסיון להסתיר מידע.' },
      { name: 'חיוך צבוע + גירוד באוזן', desc: 'שילוב שמפגין מתח בניסיון לרצות.' },
      { name: 'דיבור מהיר + נדנדת רגליים', desc: 'נסיון למלא פער בדיבור בזמן שמתח פיזי נשאר.' }
    ]
  }
];

export default function DeceptionCues() {
  const theme = useColorScheme() === 'dark' ? dark : light;
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>      
      <Text style={[styles.header, { color: theme.primary }]}>מחוות מתח ושקר</Text>
      {cues.map((section, idx) => (
        <View key={idx} style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>          
          <Text style={[styles.category, { color: theme.text }]}>{section.category}</Text>
          {section.items.map((it, i) => (
            <Text key={i} style={[styles.item, { color: theme.text }]}>
              • {it.name}: {it.desc}
            </Text>
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
  category: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  item: { fontSize: 14, lineHeight: 20, marginLeft: 12 }
});
