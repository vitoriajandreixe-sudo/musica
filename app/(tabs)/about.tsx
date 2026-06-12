import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';


export default function aboutScreen() {
  return (
    <View style={ styles.container}> 
      <Text style={styles.titulo}>Instrumentos Musicais </Text>
            <Text style={styles.text}>Esta Página foi criado no intuito de alistarmos e conhecermos o máximo possível de instrumentos  </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#ffffffc7',
  alignItems: 'center',
  justifyContent: 'center',

  },
  titulo:{
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
    text:{
    color: 'blue',
    fontSize: 20 ,
    textAlign: 'center',
  },
});

