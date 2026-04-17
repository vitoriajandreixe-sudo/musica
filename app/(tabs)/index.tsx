import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';


export default function Index() {
  return (
    <View style={ styles.container}> 
      <Text style={styles.text}>Sejam Bem vindos</Text>
      <Link href="/about">Pagina sobre</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#c7e9f78c',
  alignItems: 'center',
  justifyContent: 'center',

  },
  text:{
    color: '#2b89e2',
    fontSize: 35,
    fontWeight: 'bold',

  },

  button:{
      fontSize:20,
      textDecorationLine:'underline',
      color: 'blue',
  }

});