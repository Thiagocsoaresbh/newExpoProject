// Importa o componente de imagem otimizado da biblioteca Expo
import { Image } from 'expo-image';

// Importa o objeto Platform para verificar o sistema operacional, e o StyleSheet para criar estilos
import { Platform, StyleSheet, Pressable, Text } from 'react-native';

// Importa componentes personalizados do projeto
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Importa o roteador do expo-router para navegar entre telas
import { router } from 'expo-router';

// Função principal da tela inicial (Home)
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      // Define cores diferentes para o fundo do cabeçalho dependendo do tema (claro ou escuro)
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      // Define uma imagem no cabeçalho
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* Título da tela e animação */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Passo 1: instruções sobre como editar a tela */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      {/* Passo 2: instrução sobre aba "Explore" */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>

      {/* Passo 3: instrução sobre como resetar o projeto */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>

      {/* ✅ BOTÃO que leva para a tela "modulo2", onde está o modal */}
      <ThemedView style={styles.stepContainer}>
        {/* Pressable: componente de botão que detecta toque */}
        {/* onPress: executa a função router.push('/modulo2') ao clicar */}
        {/* router.push('/modulo2'): navega para a rota que mostra a tela com o modal */}
        <Pressable onPress={() => router.push('/modulo2')} style={styles.botaoIr}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Ir para Módulo 2</Text>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  // Estilo para o título principal e animação (HelloWave)
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  // Estilo aplicado a cada bloco de instruções (passos)
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  // Estilo para a imagem React no fundo do cabeçalho
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  // Estilo para o botão "Ir para Módulo 2"
  botaoIr: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
