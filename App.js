import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "blue",
      alignItems: 'center',
      justifyContent: 'center'
    }}> 

    <Text>Laís Silva dos Santos</Text>
    <Text>Davi Pedro Silva Alves</Text>
    <StatusBar style='auto' />
    </View>

);
}