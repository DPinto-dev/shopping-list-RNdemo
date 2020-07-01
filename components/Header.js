import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Header = (props) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
