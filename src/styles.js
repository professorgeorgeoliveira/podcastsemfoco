import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const colors = {
  bg: '#0b1020',
  panel: '#111a2e',
  muted: '#aab5cc',
  accent: '#80f0c0',
  white: '#f4f7ff',
};
export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  page: { flex: 1, padding: 22, backgroundColor: colors.bg },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.white,
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
  },
  body: { color: colors.muted, fontSize: 16, lineHeight: 24 },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: { color: '#07120f', fontWeight: '800', fontSize: 16 },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#34425e',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryText: { color: colors.white, fontWeight: '700', fontSize: 15 },
  card: {
    backgroundColor: colors.panel,
    borderColor: '#22304b',
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
  },
  loading: { color: colors.muted, marginTop: 12, textAlign: 'center' },
});
