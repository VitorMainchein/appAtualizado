import React from "react";
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import { LinearGradient} from "expo-linear-gradient";
  
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
logo:{
    width: 150,
    height: 150,
},
gradient: {
    ...StyleSheet.absoluteFillObject,
   
},
gradientTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '30%',
    backgroundColor: 'red',  // Top color
},
gradientBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: '70%',
    backgroundColor: 'black',  // Bottom color
},
background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0.8,
    height: 880,
  },

})



const splashScreen = function () {
const Logo = 'https://w7.pngwing.com/pngs/182/887/png-transparent-sao-paulo-f-c-hd-logo.png'
return <View style={style.container}>
    <LinearGradient
    colors={['#000000', '#ffffff']}
    style={style.background}
  />
    <Image style={style.logo}
    source={{uri:Logo}}
  />
   
</View>
}

export default splashScreen