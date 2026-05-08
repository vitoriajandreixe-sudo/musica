import { View, StyleSheet } from "react-native";
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/imageInstrumentos.jpg');

export default function Edit()
{
    return (
      <View style={styles.container}> 
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#230c3d',
        alignItems: 'center',
    },

    imageContainer: {
        flex: 1,

    },
 
});