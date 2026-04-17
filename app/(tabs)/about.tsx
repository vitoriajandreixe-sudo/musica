import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';


export default function aboutScreen() {
  return (
    <View style={ styles.container}> 
      <Text style={styles.text}>Informações de musicas </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#b8e9fc8c',
  alignItems: 'center',
  justifyContent: 'center',

  },
  text:{
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',

  },
});

