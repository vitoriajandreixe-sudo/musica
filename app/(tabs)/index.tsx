import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';


export default function Index() {
  return (
    <View style={ styles.container}> 
    <Text style={styles.text}>Sejam Bem-Vindos</Text>
      <Text style={styles.titulo}>nstrumentos musicais são dispositivos desenvolvidos para transformar diferentes formas de energia — como vibração, ar ou impacto — em som organizado. Eles são fundamentais na construção da música, permitindo a criação de ritmo, melodia e harmonia.</Text>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#4411748c',
  alignItems: 'center',
  justifyContent: 'center',

  },
  text:{
    color: '#2b89e2',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',

  },
   titulo:{
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
  },

  button:{
      fontSize:25,
      textDecorationLine:'underline',
      color: 'blue',
  }
  

});