// Summary.js
import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet, useColorScheme, Platform } from 'react-native';
import { light, dark } from './theme';

// --- תיאורי פרופיל ---
const needDesc = {
  'חשיבות עצמית': 'האדם רוצה להרגיש משמעותי ומשפיע בסביבה.',
  'אישורים': 'האדם זקוק לאישור חיצוני כדי להרגיש בטוח.',
  'קבוצתיות': 'האדם שואף להשתייך ולהיות חלק מהקהילה.',
  'אינטליגנציה': 'האדם רוצה להיתפס כחכם ובעל ידע.',
  'קורבניזם': 'האדם מציג את עצמו כקורבן כדי למשוך אמפתיה.',
  'כוח ושליטה': 'האדם שואף לשליטה והשפעה על סביבתו.'
};
const valueDesc = {
  'שבטיות': 'נשען על הערך של שייכות עזה לקהילה.',
  'הערכה': 'מונע מצורך בהכרה והערצה מהסביבה.',
  'מידע': 'רואה בידע סימן להצלחה וכוח.',
  'ניסיון': 'ביסוס עצמי על לקחים מעבר.',
  'חופש': 'חפץ בעצמאות מוחלטת וללא הגבלות.',
  'גדילה אישית': 'שואף להתפתחות ולמידה מתמשכת.'
};
const decisionDesc = {
  'יוצא דופן': 'נוקט בגישה ייחודית ושובר תבניות.',
  'כמו כולם': 'נוהג על פי הנורמה כדי להשתלב.',
  'מיישר קו': 'מתאים עצמו לרוב למניעת קונפליקטים.',
  'המשקיע': 'רואה כל החלטה כהשקעה לטווח ארוך.',
  'הטכנולוגי': 'מחפש להיות תמיד בחזית החדשנות.',
  'הנצרך': 'פועל רק כשחייב, נמנע מבזבוז.'
};

// --- פחדים ---
const fearDescNeed = {
  'חשיבות עצמית': 'מפחד שאנשים יתעלמו ממנו ויראו אותו כלא חשוב.',
  'אישורים': 'מפחד מביקורת וחוסר הכרה שישיבו אותו אחורה.',
  'קבוצתיות': 'מפחד להיות מנותק או מנודה.',
  'אינטליגנציה': 'מפחד להיחשף כחסר ידע.',
  'קורבניזם': 'מפחד מאחריות ומעומס רגשי.',
  'כוח ושליטה': 'מפחד לאבד שליטה ולחשוש מחולשה.'
};
const fearDescValue = {
  'שבטיות': 'מפחד לאבד את זהותו והשייכות.',
  'הערכה': 'מפחד להישאר בלתי מוערך וחסר משמעות.',
  'מידע': 'מפחד מאי וודאות וחוסר הבנה.',
  'ניסיון': 'מפחד מכישלון שחוזר על עצמו.',
  'חופש': 'מפחד מהתחייבויות והגבלות שיגבילו אותו.',
  'גדילה אישית': 'מפחד מקיפאון ואי־התפתחות.'
};
const fearDescDecision = {
  'יוצא דופן': 'מפחד משיפוט חברתי ותגובות שליליות.',
  'כמו כולם': 'מפחד מבדידות ואיבוד ייחודיות.',
  'מיישר קו': 'מפחד לעמוד לבד ולסכן קשרים.',
  'המשקיע': 'מפחד מהפסד כלכלי והזדמנויות מפוספסות.',
  'הטכנולוגי': 'מפחד להישאר מאחור על חדשנות.',
  'הנצרך': 'מפחד מחוסר מוכנות ותגובה בזמן אמת.'
};

// --- משפטי פתיחה ---
const needEntry = {
  'חשיבות עצמית': 'תראה, אני יודע כמה חשוב לך שיכירו בך ובערכך.',
  'אישורים': 'אני יודע שכל צעד שלך מחפש אישור והכרה סביבתית.',
  'קבוצתיות': 'נראה שאתה מחפש תמיד להרגיש חלק ממשהו גדול.',
  'אינטליגנציה': 'אני מזהה את הרצון שלך להוכיח את החוכמה בכל הזדמנות.',
  'קורבניזם': 'אני מרגיש שאתה מציג את עצמך כקורבן כדי לזכות בתמיכה.',
  'כוח ושליטה': 'אני מבין את הצורך החזק שלך להוביל ולשלוט במצבים.'
};

// --- משפטי הלם ---
const decisionShock = {
  'יוצא דופן': 'אבל האם אי פעם שאלת אם השונות שלך מבודדת אותך יותר ממה שהיא מחברת?',
  'כמו כולם': 'ומה אם תמיד תישאר בלתי נראה אם לעולם לא תוכל לבלוט?',
  'מיישר קו': 'אבל מה אם היציבות שאתה מחפש בעצם חונקת רעיונות חדשניים?',
  'המשקיע': 'ואם תעמוד מחוץ לדלת בזמן שההזדמנות יוצאת לדרך?',
  'הטכנולוגי': 'מה אם החדשנות היחידה שאתה עוקב אחריה היא של אחרים?',
  'הנצרך': 'ואם תמתין לעת חירום, אף פעם לא תהיה מוכן?'
};

// --- המלצה לפעולה ---
const valueAction = {
  'שבטיות': 'הדגש חיבור וקשרים: שתף בסיפור קבוצתי והצע מעורבות פעילה.',
  'הערכה': 'הדגש הישגים והתייחס למעלה בסולם הכבוד – בקש משוב פומבי.',
  'מידע': 'הצג נתונים ועובדות, השתמש בגרפים ובתרשימים חזותיים.',
  'ניסיון': 'ספר על הישגים מהעבר וחבר אותם לפתרון הנוכחי.',
  'חופש': 'הצע דרכים עצמאיות לביצוע, עם מינימום פיקוח.',
  'גדילה אישית': 'הצע תכנית פעולה עם מדדי הצלחה ברורים.'
};

export default function Summary({ route, navigation }) {
  const { profile } = route.params;
  const theme = useColorScheme() === 'dark' ? dark : light;
  const { need, value, decision, stress, comfort } = profile;

  const deceptionScore = Math.min(10, stress.length * 2);
  const deceptionText =
    stress.length >= 3
      ? '⚠️ סימני מתח גבוהים מצביעים על ניסיון להסתרה.'
      : '✅ לא נצפו סימני מתח חריגים.';
  const comfortText =
    comfort.length > stress.length
      ? '😊 שפת גוף בנוחות גוברת – אותנטיות גבוהה.'
      : '😓 מתח גובר על נוחות – יתכן הסתרה או אי־נוחות.';

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>      
      <View style={[styles.card, { backgroundColor: theme.card }]}>        
        <Text style={[styles.heading, { color: theme.text }]}>🧩 פרופיל</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`• צורך: ${need} → ${needDesc[need]}`}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`• ערך: ${value} → ${valueDesc[value]}`}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`• החלטה: ${decision} → ${decisionDesc[decision]}`}</Text>

        <Text style={[styles.heading, { color: theme.text, marginTop: 16 }]}>😨 פחדים</Text>
        <Text style={[styles.text, { color: theme.text }]}>{fearDescNeed[need]}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{fearDescValue[value]}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{fearDescDecision[decision]}</Text>

        <Text style={[styles.heading, { color: theme.text, marginTop: 16 }]}>📊 שפת גוף</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`• מתח: ${stress.join(', ')}`}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`• נוחות: ${comfort.join(', ')}`}</Text>

        <Text style={[styles.heading, { color: theme.text, marginTop: 16 }]}>🔥 סיכון לשקר</Text>
        <Text style={[styles.text, { color: theme.text }]}>{`דירוג: ${deceptionScore}/10 – ${deceptionText}`}</Text>
        <Text style={[styles.text, { color: theme.text }]}>{comfortText}</Text>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>🔑 משפט כניסה</Text>
          <Text style={[styles.text, { color: theme.text }]}>{needEntry[need]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>⚡ משפט הלם</Text>
          <Text style={[styles.text, { color: theme.text }]}>{decisionShock[decision]}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>💡 המלצה לפעולה</Text>
          <Text style={[styles.text, { color: theme.text }]}>{valueAction[value]}</Text>
        </View>
      </View>

      {/* כפתורים קטנים בשורה */}
      <View style={styles.buttonRow}>
        <Pressable
          onPress={() => navigation.replace('Wizard')}
          style={({ pressed }) => [
            styles.smallButton,
            { backgroundColor: theme.primary },
            pressed && styles.pressed
          ]}
        >
          <Text style={styles.buttonText}>🔄 התחלה</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.replace('MainMenu')}
          style={({ pressed }) => [
            styles.smallButton,
            { backgroundColor: theme.secondary },
            pressed && styles.pressed
          ]}
        >
          <Text style={styles.buttonText}>🏠 בית</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 16, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  heading: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  text: { fontSize: 14, lineHeight: 22 },
  section: { marginTop: 16 },
  buttonRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  smallButton: { marginHorizontal: 5, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, alignItems: 'center', ...Platform.select({ android: { elevation: 2 }, ios: { shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4 } }) },
  buttonText: { fontSize: 14, fontWeight: '600', color: '#000' },
  pressed: { opacity: 0.7 }
});
