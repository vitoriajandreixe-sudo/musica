import { ImageSourcePropType, View, StyleSheet } from "react-native";
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState,useRef } from 'react';

import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from  '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import {captureRef} from 'react-native-view-shot';

const PlaceholderImage = require('@/assets/images/imageInstrumentos.jpg');

export default function Edit()

{
   const [selectedImage, setSelectedImage]= useState<string | undefined>(undefined);
   const [showAppOptions, setShowOptions] = useState<boolean>(false);
   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
   const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
   const [status, requestPermission] = MediaLibrary.usePermissions();
   const imageRef = useRef<any>(null);

    const pickImageAsync = async()=>{
        let result  = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality:1,
        });

        if (!result.canceled){
            setSelectedImage(result.assets[0].uri);
            setShowOptions(true);
        }else{
            alert('You did not select any image.');
        }
    }
      
      const onReset = () => {
        setShowOptions(false);
      };

      const onAddSticker = () => {
        setIsModalVisible(true);
      };

      const onModalClose = () => {
        setIsModalVisible(false);
      };

      const onSaveImageAsync = async () => {
        try{
            const localUri = await captureRef(imageRef,{
                height:440,
                quality:1,
            });
            await MediaLibrary.saveToLibraryAsync(localUri);
            if(localUri){
                alert('Saved!');
            }
        }catch(e){
            console.log(e);
        }

      }; 
    
      if(status===null)
      {
        requestPermission();
      }

    return (
      <GestureHandlerRootView style={styles.container}> 
      <View style={styles.imageContainer}>
      <View ref={imageRef}collapsable={false}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      </View>
      {showAppOptions ?(
        <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset}/>
                <CircleButton onPress={onAddSticker}/>
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                </View>
            </View>

      ) : (
        
        <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
            <Button label="Use this photo" onPress={() => setShowOptions(true)}/>
        </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
        </EmojiPicker>
        </GestureHandlerRootView>
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
    footerContainer:{
        flex: 1/3,
        alignItems: 'center',
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
 
});