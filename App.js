import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Cream'},
    {id: uuid(), text: 'Coffee'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Bread'},
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shopping List Demo" />
      <FlatList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default App;
