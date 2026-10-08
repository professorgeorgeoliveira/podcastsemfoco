import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
  return <SafeAreaView style={styles.safe}><View style={[styles.page, { justifyContent: 'space-between', paddingTop: 54, paddingBottom: 34 }]}>
    <Text style={styles.eyebrow}>OUÇA ALGO NOVO</Text>
    <View style={{ gap: 20 }}>
      <Text style={styles.title}>Ideias que{ '\n' }dão play.</Text>
      <Text style={styles.body}>Descubra conversas e conteúdos sobre tecnologia, desenvolvimento e criatividade.</Text>
      <View style={styles.card}><Text style={{ fontSize: 27, marginBottom: 12 }}>🎧</Text><Text style={{ color: '#f4f7ff', fontSize: 17, fontWeight: '700', marginBottom: 6 }}>Seu próximo podcast favorito</Text><Text style={styles.body}>Uma seleção para aprender e se inspirar, episódio por episódio.</Text></View>
    </View>
    <View style={{ gap: 12 }}><Text style={{ color: '#aab5cc', textAlign: 'center', fontSize: 13 }}>Catálogo atualizado pela internet</Text><Text onPress={() => navigation.navigate('Podcasts')} style={[styles.buttonText, { backgroundColor: '#80f0c0', padding: 16, borderRadius: 16, textAlign: 'center' }]}>Explorar podcasts  →</Text></View>
  </View></SafeAreaView>;
}
