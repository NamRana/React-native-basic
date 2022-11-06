import { useState } from 'react';
import { View,SafeAreaView, Image, TextInput, Button, Switch } from 'react-native';
import Home from './Screens/Home';

export default function App() {
  const [active,SetActive]=useState(false);
  return (
    <View>
    <SafeAreaView>
      <Home/>
      <Image source={require("./assets/icon.png")}
        style={{width:200,height:200}}
      />

      <TextInput style={{backgroundColor:"blue",padding:20,color:"white"}}/>
      <Button title="Click" onPress={()=>console.log("Hi Naman ")}/>
      <Switch value={active} onChange={()=>SetActive((prev)=>!prev)}/>
      </SafeAreaView>
    </View>
  );
}
