import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PodcastItem from '../components/PodcastItem';
import { colors, styles } from '../styles';

const API_URL = 'https://raw.githubusercontent.com/professorgeorgeoliveira/api-podcast/master/db.json';
export default function PodcastsScreen({ navigation }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const loadPodcasts = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Servidor respondeu ${response.status}`);
      const data = await response.json();
      setPodcasts(Array.isArray(data.podcasts) ? data.podcasts : []);
    } catch (e) { setError('Não foi possível carregar o catálogo. Confira sua conexão e tente de novo.'); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { loadPodcasts(); }, [loadPodcasts]);
  return <SafeAreaView style={styles.safe}><View style={styles.page}>
    <Text style={styles.eyebrow}>CATÁLOGO</Text><Text style={[styles.title, { fontSize: 27, marginTop: 8, marginBottom: 8 }]}>Podcasts para explorar</Text><Text style={[styles.body, { marginBottom: 18 }]}>Toque em um programa para ver mais detalhes.</Text>
    {loading ? <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator color={colors.accent} size="large" /><Text style={styles.loading}>Carregando podcasts...</Text></View> : error ? <View style={[styles.card, { gap: 14 }]}><Text style={styles.body}>{error}</Text><Pressable onPress={loadPodcasts} style={styles.button}><Text style={styles.buttonText}>Tentar novamente</Text></Pressable></View> : <FlatList data={podcasts} keyExtractor={(item, index) => String(item.id ?? index)} renderItem={({ item }) => <PodcastItem podcast={item} onPress={() => navigation.navigate('Detalhes', { podcast: item })} />} ItemSeparatorComponent={() => <View style={{ height: 12 }} />} contentContainerStyle={{ paddingBottom: 24 }} refreshControl={<RefreshControl refreshing={loading} onRefresh={loadPodcasts} tintColor={colors.accent} />} ListEmptyComponent={<Text style={styles.body}>Nenhum podcast encontrado.</Text>} />}
  </View></SafeAreaView>;
}
