import {React, useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import AllTarefas from './src/AllTarefas'
export default function App() {

  const [allTarefas, setAllTarefas] = useState(['heloo wolrd', 'sou wagner', 'desenvolvedor front end'])
  const [inputTarefa, setInputTarefa] = useState('')

  const AdicionarTarefa = ()=>{
    if(inputTarefa != ''){
      setAllTarefas((prev)=>[...prev, inputTarefa])
      setInputTarefa('')
    }else{
      alert('Por favor digite uma')
    }

  }
  
 return (
   <View style={styles.container}>
      <View style={styles.addTarefa}>
        <TextInput
          style={styles.inputTarefa}
          onChangeText={setInputTarefa}
          value={inputTarefa}
          placeholder="Digite aqui sua tarefa"
        />
        <TouchableOpacity style={styles.button} onPress={AdicionarTarefa}>
          <Text style={styles.text}>Adicionar tarefa</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tarefas}>
        <AllTarefas allTarefas={allTarefas}/>
      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#d9d9d9'
  },
  addTarefa:{
    height: 140,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputTarefa:{
    height: 40,
    width: 250,
    margin: 12,
    borderRadius: 10,
    borderWidth: .8,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 250,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  tarefas:{
    
  },
})