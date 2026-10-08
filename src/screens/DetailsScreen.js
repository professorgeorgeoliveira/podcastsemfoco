import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles';
export default function DetailsScreen({ route }) {
  const podcast = route.params?.podcast ?? {};
  const title = podcast.title ?? podcast.titulo ?? 'Podcast';
  const description = podcast.description ?? podcast.descricao ?? 'Descrição não disponível.';
  return <SafeAreaView style={styles.safe}><ScrollView contentContainerStyle={[styles.page, { gap: 20 }]}>
    {podcast.img ? <Image source={{ uri: podcast.img }} style={{ width: '100%', aspectRatio: 1.6, borderRadius: 22, backgroundColor: '#22304b' }} /> : <View style={[styles.card, { height: 190, alignItems: 'center', justifyContent: 'center' }]}><Text style={{ fontSize: 70 }}>🎙️</Text></View>}
    <View style={{ gap: 12 }}><Text style={styles.eyebrow}>{podcast.id ? `FREQUÊNCIA ${podcast.id}` : 'PODCAST'}</Text><Text style={styles.title}>{title}</Text><Text style={styles.body}>{description}</Text></View>
    <View style={styles.card}><Text style={{ color: '#f4f7ff', fontSize: 16, fontWeight: '700', marginBottom: 8 }}>Sobre este programa</Text><Text style={styles.body}>Conteúdo selecionado para quem gosta de aprender sobre tecnologia e desenvolvimento.</Text></View>
  </ScrollView></SafeAreaView>;
}
