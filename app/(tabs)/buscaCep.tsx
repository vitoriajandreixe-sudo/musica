import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep';

export default function BuscaCEP() {

  const {
    cep,
    setCep,
    endereco,
    buscarCEP
  } = useBuscaCep();

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
    >

      <Text style={styles.titulo}>
        Consulte seu CEP 📍
      </Text>

      <View style={styles.linha} />

      <Text style={styles.subtitulo}>
        Digite seu CEP para consultar o endereço
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          CEP
        </Text>

        <TextInput
          style={styles.textInput}
          value={cep}
          onChangeText={setCep}
          placeholder="Digite seu CEP"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={8}
        />

        <Pressable
          style={styles.button}
          onPress={buscarCEP}
        >
          <Text style={styles.buttonText}>
            Buscar endereço
          </Text>
        </Pressable>

      </View>

      {endereco.logradouro !== '' && (

        <View style={styles.result}>

          <Text style={styles.resultTitulo}>
            Endereço encontrado ✨
          </Text>

          <View style={styles.info}>
            <Text style={styles.infoLabel}>
              Logradouro
            </Text>

            <Text style={styles.infoText}>
              {endereco.logradouro}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoLabel}>
              Bairro
            </Text>

            <Text style={styles.infoText}>
              {endereco.bairro}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoLabel}>
              Cidade
            </Text>

            <Text style={styles.infoText}>
              {endereco.localidade}
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoLabel}>
              Estado
            </Text>

            <Text style={styles.infoText}>
              {endereco.uf}
            </Text>
          </View>

        </View>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll: {
    flex: 1,
    backgroundColor: '#F7F3FA',
  },

  container: {
    alignItems: 'center',
    padding: 25,
    paddingTop: 80,
    paddingBottom: 40,
  },

  titulo: {
    color: '#683a9c',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  linha: {
    width: 70,
    height: 4,
    backgroundColor: '#683a9c',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },

  subtitulo: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 4,
  },

  label: {
    color: '#683a9c',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D6C5E5',
    backgroundColor: '#FAFAFA',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#683a9c',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  result: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 22,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 4,
  },

  resultTitulo: {
    color: '#683a9c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },

  info: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 10,
  },

  infoLabel: {
    color: '#683a9c',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  infoText: {
    color: '#444',
    fontSize: 16,
  },

});