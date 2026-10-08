import { Image, Pressable, Text, View } from 'react-native';
import { styles } from '../styles';
export default function PodcastItem({ podcast, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
          opacity: pressed ? 0.8 : 1,
        },
      ]}>
      {podcast.img ? (
        <Image
          source={{ uri: podcast.img }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            backgroundColor: '#22304b',
          }}
        />
      ) : (
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            backgroundColor: '#22304b',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 26 }}>🎙️</Text>
        </View>
      )}
      <View style={{ flex: 1, gap: 5 }}>
        <Text style={{ color: '#80f0c0', fontSize: 12, fontWeight: '800' }}>
          {podcast.id ? `FREQUÊNCIA ${podcast.id}` : 'PODCAST'}
        </Text>
        <Text
          numberOfLines={1}
          style={{ color: '#f4f7ff', fontSize: 17, fontWeight: '700' }}>
          {podcast.title ?? podcast.titulo ?? 'Podcast'}
        </Text>
        <Text
          numberOfLines={2}
          style={{ color: '#aab5cc', fontSize: 13, lineHeight: 18 }}>
          {podcast.description ?? podcast.descricao ?? 'Toque para saber mais.'}
        </Text>
      </View>
      <Text style={{ color: '#80f0c0', fontSize: 22 }}>›</Text>
    </Pressable>
  );
}
