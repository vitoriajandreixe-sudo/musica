import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';


export default function aboutScreen() {
  return (
    <View style={ styles.container}> 
      <Text style={styles.text}>Deu certo !!!! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#5654d38c',
  alignItems: 'center',
  justifyContent: 'center',

  },
  text:{
    color: '#622be2',
    fontSize: 40,
    fontWeight: 'bold',

  },
});

