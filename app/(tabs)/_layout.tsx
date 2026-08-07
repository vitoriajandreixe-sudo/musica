import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout(){
  return(
       <Tabs
      screenOptions={{
      tabBarActiveTintColor: '#dad9db',
      headerStyle:{
        backgroundColor:'#020202',
      },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle:{
          backgroundColor: '#020202',
        },
     }}
     >

       <Tabs.Screen
       name="index"
       options={{
        title: 'Home',
        tabBarIcon:({color, focused}) => (
        <Ionicons name={focused ? 'musical-note-sharp' : 'musical-note-outline'} color={color} size={24}/>
      ),
      }}
      />
        <Tabs.Screen
      name="about"
      options={{
        title: 'about',
        tabBarIcon:({color, focused}) => (
          <MaterialCommunityIcons name={focused ? 'file-music' : 'file-music-outline'} color={color} size={24}/>
        ),
      }}
     /> 

       <Tabs.Screen
      name="toDoList"
      options={{
        title: 'List',
        tabBarIcon:({color, focused}) => (
          <FontAwesome name={focused ? 'th-list' : 'list'} color={color} size={24}/>
        ),
      }}
     /> 


      <Tabs.Screen
      name="buscaCep"
      options={{
        title: 'Cep',
        tabBarIcon:({color, focused}) => (
          <Entypo name={focused ? 'location' : 'location-pin'} color={color} size={24}/>
        ),
      }}
     /> 
       

       
    
     
    </Tabs>
       
  );
}

