import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllTarefas(props) {
 return (
   <View>
    {props.allTarefas.map((item)=> 
        (<Text key={props.allTarefas.indexOf(item)} style={styles.tarefas}> {item} </Text>)
    )}  
   </View>
  );
}

const styles = StyleSheet.create({
    tarefas:{
        height:100,
        backgroundColor:'green',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        borderRadius: 15,
        padding:10, 
    }
})