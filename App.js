import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from './helpers/uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Cream'},
    {id: uuid(), text: 'Coffee'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shopping List Demo" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});

export default App;
