import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>
          Instrumentos Musicais 🎵
        </Text>

        <View style={styles.linha} />
      </View>

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Sobre o projeto
        </Text>

        <Text style={styles.text}>
          Esta página foi criada com o intuito de apresentar,
          conhecer e explorar o máximo possível de instrumentos
          musicais.
        </Text>

        <Text style={styles.text}>
          Aqui você poderá conhecer diferentes tipos de instrumentos,
          suas características e a importância de cada um na música.
        </Text>

      </View>

      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Voltar ao início
          </Text>
        </Pressable>
      </Link>

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

  titulo: {
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

  text: {
    color: '#444444',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'justify',
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#683a9c',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 25,

    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});