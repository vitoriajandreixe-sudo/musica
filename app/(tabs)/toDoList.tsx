import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function App() {

  const {
    tarefas,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefa,
    removerTarefa
  } = useTarefas();

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Instrumentos Musicais 🎵
      </Text>

      <View style={styles.linha} />

      <Text style={styles.subtitulo}>
        Adicione seus instrumentos
      </Text>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Nome do instrumento..."
          placeholderTextColor="#999"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={adicionarTarefa}
        >
          <Text style={styles.buttonText}>
            Adicionar
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum instrumento adicionado ainda 🎶
          </Text>
        }

        renderItem={({ item }) => (

          <View style={styles.tarefaContainer}>

            <View style={styles.instrumento}>
              <Text style={styles.icone}>
                🎵
              </Text>

              <Text style={styles.tarefaTexto}>
                {item.texto}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.remover}>
                Remover
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F7F3FA',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#683a9c',
    textAlign: 'center',
    marginTop: 30,
  },

  linha: {
    width: 70,
    height: 4,
    backgroundColor: '#683a9c',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 17,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6C5E5',
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#683a9c',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  tarefaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,
    marginBottom: 10,

    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  instrumento: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  icone: {
    fontSize: 22,
    marginRight: 10,
  },

  tarefaTexto: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },

  remover: {
    fontSize: 14,
    color: '#B00020',
    fontWeight: 'bold',
  },

  vazio: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
    marginTop: 40,
  },

});