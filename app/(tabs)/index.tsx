import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.text}>Sejam Bem-Vindos 🎵</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Instrumentos Musicais
        </Text>

        <Text style={styles.titulo}>
          Instrumentos musicais são dispositivos desenvolvidos para
          transformar diferentes formas de energia — como vibração, ar
          ou impacto — em som organizado.
        </Text>

        <Text style={styles.titulo}>
          Eles são fundamentais na construção da música, permitindo a
          criação de ritmo, melodia e harmonia.
        </Text>

      </View>

      <Text style={styles.rodape}>
        Explore o mundo da música 🎶
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F3FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  text: {
    color: '#683a9c',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  linha: {
    width: 70,
    height: 4,
    backgroundColor: '#683a9c',
    borderRadius: 10,
    marginTop: 10,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 5,
  },

  subtitulo: {
    color: '#683a9c',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  titulo: {
    color: '#444444',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify',
    marginBottom: 12,
  },

  rodape: {
    color: '#683a9c',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  },

});