import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PodcastsScreen from './src/screens/PodcastsScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: '#0b1020', card: '#111a2e', text: '#f4f7ff', border: '#22304b', primary: '#80f0c0' },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#111a2e' }, headerTintColor: '#f4f7ff', headerTitleStyle: { fontWeight: '700' }, contentStyle: { backgroundColor: '#0b1020' } }}>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Podcasts" component={PodcastsScreen} options={{ title: 'Explorar podcasts' }} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} options={{ title: 'Sobre o podcast' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
