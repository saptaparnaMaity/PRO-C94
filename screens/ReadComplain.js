import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';





export default class Horoscope extends React.Component{
  render(){
    return(
    <View>
      <Text style={styles.header}>𝕽𝖊𝖆𝖉 𝕮𝖔𝖒𝖕𝖑𝖆𝖎𝖓</Text>
      <Text style={styles.parag}>Read Complain</Text>
      <TouchableOpacity style={styles.backb} onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
        <Text style={styles.backb}>Back</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'blue',
    justifyContent:'center',
    textAlign:'center',
    height:50,
    textAlignVertical:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  parag:{
    marginTop:20,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    marginLeft:5,
    marginRight:5
  },
  backb:{
backgroundColor:'orange',
     marginTop:200,
    backgroundColor:'blue',
    color:'white',
    width:90,
    height:40,
    textAlign:'center',
   borderRadius:10,
   justifyContent:'center',
  
  },
})