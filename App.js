import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Pizzatranslator from './components/Start';
import FlatListDemo from './components/FlatListDemo';
import FlatListSections from './components/FlatListSelector';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ReactNat</Text>
      <FlatListDemo/>
      <FlatListSections/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "lightblue",
        alignitems:'center',
        justifyContent:'center',

    },
    heading:{
        marginTop:10,
        textAlign:"center",
        fontSize:20,
        fontWeight: 'bold',
        color:'yellow',
        background:'black'

    },
})
